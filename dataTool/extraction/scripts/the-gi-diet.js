const cheerio = require('cheerio');

module.exports = (html) => {
  let food, foodName;
  const dataMap = {};
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
         foodName = firstColumn.trim().replace(/(\r\n|\n|\r)/gm," ");
         food = {
           'id' : foodName.replace(/\s+/g, '-').toLowerCase(),
           'name' : foodName,
           'gi' : secondColumn
         };
         if (!dataMap[food.id]){
           dataMap[food.id] = true;
           data.push(food);
         }
       }
     });
  }
  return data;
};
