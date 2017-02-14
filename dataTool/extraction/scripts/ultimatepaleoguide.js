const cheerio = require('cheerio');

module.exports = (html) => {
  let food;
  const data = {};
  const $ = cheerio.load(html);
  const $dataTable = $('table');
  if ($dataTable.length ) {
     const rows = $dataTable.find('tr');
     rows.each((index, row)=>{
       const columns = $(row).find('td');
       // GI rows have a numeric second column
       const firstColumn = $(columns[0]).text();
       const secondColumn = $(columns[1]).text();
       if (!isNaN(parseInt(secondColumn, 10))) {
         food = {
           'id' : 'ultimatepaleoguide-'+firstColumn.trim().replace(/\s+/g, '-').toLowerCase(),
           'name' : firstColumn.trim(),
           'gi' : secondColumn
         };
         if (!data[food.id]){
           data[food.id] = food;
         }
       }
     });
  }
  return data;
};
