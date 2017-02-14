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
       // GI rows have a numeric third column
       const firstColumn = $(columns[0]).text();
       const thirdColumn = $(columns[2]).text();
       if (!isNaN(parseInt(thirdColumn, 10))) {
         food = {
           'id' : 'lowglycemicload-'+firstColumn.trim().replace(/\s+/g, '-').toLowerCase(),
           'name' : firstColumn.trim(),
           'gi' : thirdColumn
         };
         if (!data[food.id]){
           data[food.id] = food;
         }
       }
     });
  }
  return data;
};
