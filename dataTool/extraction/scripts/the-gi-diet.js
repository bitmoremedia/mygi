const cheerio = require('cheerio');

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
         // replace new line
         const food = firstColumn.replace(/(\r\n|\n|\r)/gm," ");
         data.push({
           food,
           'gi' : secondColumn
         });
       }
     });
  }
  return data;
};
