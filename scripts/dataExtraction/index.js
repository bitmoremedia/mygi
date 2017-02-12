const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs-extra');

const dataSourceDirectory = './data/sources/';
const sources = [
  {
    'name' : 'havard',
    'url' : 'http://www.health.harvard.edu/diseases-and-conditions/glycemic_index_and_glycemic_load_for_100_foods'
  },
  {
    'name' : 'weightlossresources',
    'url' : 'http://www.weightlossresources.co.uk/diet/gi_diet/glycaemic_index_tables.htm'
  },
  {
    'name' : 'mendosa',
    'url' : 'http://www.mendosa.com/gilists.htm'
  }
];
const missingSources = [];
const missingSourcesFetch = [];

function fetchFrom(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, res, body) {
      if (err) { return reject(err); }
      return resolve(body);
    });
  });
}

console.log('Check for missing data source files');
sources.forEach((source)=>{
  try {
    let data = fs.readJsonSync(`${dataSourceDirectory}${source.name}.json`);
  } catch(err){
    missingSources.push(source);
    missingSourcesFetch.push(fetchFrom(source.url));
  }
});

if (!missingSources.length) {
  console.log('All good - no missing data source files');
  return;
}

console.log(`Retreiving data for ${missingSources.length} missing source files`);
Promise.all(missingSourcesFetch)
  .then(function(allData) {
      missingSources.forEach((source, index)=>{
        try {
          const dataExtractFunction = require(`./${source.name}`);
          const dataExtract = dataExtractFunction(allData[index]);
          if (dataExtract.length){
            // we have some data so write it to file
            console.log(`Adding ${dataExtract.length} items for: ${dataSourceDirectory}${source.name}.json`);
            fs.ensureDirSync(dataSourceDirectory);
            fs.writeFile(`${dataSourceDirectory}${source.name}.json`, JSON.stringify(dataExtract), 'utf8');
          } else {
            console.log(`no data found for: ${source.name}`);
          }
        } catch(err){
          console.log(`error running extract for: ${source.name}`);
        }
      });
  });
