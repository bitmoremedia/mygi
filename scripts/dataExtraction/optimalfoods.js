const cheerio = require('cheerio');

function replaceAll(string, find, replace){
  return string.replace(new RegExp(find, 'g'), replace);
};

module.exports = (html) => {
  const data = [];
  const $ = cheerio.load(html);
  const $dataTable = $('table');
  if ($dataTable.length ) {
     const rows = $dataTable.find('tr');
     rows.each((index, row)=>{
       const columns = $(row).find('td');
       // GI rows have a numeric second column
       const firstColumn = $(columns[0]).text();
       const secondColumn = $(columns[1]).text();
       if (!isNaN(parseInt(secondColumn))) {
         // remove asterisk and trim food text
         let food = firstColumn.replace(/\*/g, '').trim();
         data.push({
           food,
           'gi' : secondColumn
         });
       }
     });
  }
  return data;
};
