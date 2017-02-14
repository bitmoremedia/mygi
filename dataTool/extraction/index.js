const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs-extra');

const sources = require('./sources.json');
const dataSourceDirectory = './dataTool/extracts/';

const missingSources = [];
const missingSourcesFetch = [];

function isEmpty(obj){
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function countObjectProperties(obj){
    var count = 0;
    for(var i in obj)
        if(obj.hasOwnProperty(i))
            count++;
    return count;
}

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
          const dataExtractScript = require(`./scripts/${source.name}`);
          const dataExtract = dataExtractScript(allData[index]);
          if (!isEmpty(dataExtract)) {
            // we have some data so write it to file
            console.log(`Adding ${countObjectProperties(dataExtract)} items for: ${dataSourceDirectory}${source.name}.json`);
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
