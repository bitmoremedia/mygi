const cheerio = require('cheerio');

module.exports = (html) => {
  let food;
  const dataMap = {};
  const data = [];
  const $ = cheerio.load(html);
  const $dataTables = $('table.articleTable');
  $dataTables.each((index, table)=>{
    const rows = $(table).find('tr');
    rows.each((index, row)=>{
      const columns = $(row).find('td');
      // GI rows have a numeric second column
      const firstColumn = $(columns[0]).text();
      const secondColumn = $(columns[1]).text();
      if (!isNaN(parseInt(secondColumn))) {
        food = {
          'id' : firstColumn.trim().replace(/\s+/g, '-').toLowerCase(),
          'name' : firstColumn.trim(),
          'gi' : secondColumn
        };
        if (!dataMap[food.id]){
          dataMap[food.id] = true;
          data.push(food);
        }
      }
    });
  });
  return data;
};
