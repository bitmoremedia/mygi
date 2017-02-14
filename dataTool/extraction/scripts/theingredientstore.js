const cheerio = require('cheerio');

function foodFromColumn($column){
  let food = false;
  let $item = $column.find('font b');
  if ($item.length) {
    food = $item.text().trim();
  }
  return food;
};

function giValueFromColumn($column){
  let gi = false;
  let $item = $column.find('font b');
  if ($item.length) {
    // ensure is a number and not a range
    if (!isNaN(parseInt($item.text())) && $item.text().indexOf('-') === -1) {
      gi = $item.text();
    }
  }
  return gi;
};

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
       const gi = giValueFromColumn($(columns[1]));
       if (gi) {
         foodName = foodFromColumn($(columns[0]));
         if (foodName) {
           food = {
             'id' : foodName.trim().replace(/\s+/g, '-').toLowerCase(),
             'name' : foodName.trim(),
             'gi' : gi
           };
           if (!data[food.id]){
             data[food.id] = food;
           }
         }
       }
     });
  }
  return data;
};
