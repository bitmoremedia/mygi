const cheerio = require('cheerio');

module.exports = (html) => {
  let food, foodName;
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
         // replace new line
         foodName = firstColumn.trim().replace(/(\r\n|\n|\r)/gm," ");
         food = {
           'id' : 'the-gi-diet='+foodName.replace(/\s+/g, '-').toLowerCase(),
           'name' : foodName,
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
