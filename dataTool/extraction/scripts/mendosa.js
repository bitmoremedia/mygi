const cheerio = require('cheerio');

const addTheLongList = false;

function extractGi(text){
  let end = (text.indexOf('±') > -1) ? text.indexOf('±') : text.length;
  return text.substring(0,end)
};

module.exports = (html) => {
  const data = [];
  const $ = cheerio.load(html);
  const $dataTables = $('table');
  $dataTables.each((index, table)=>{
    const rows = $(table).find('tr');
    rows.each((index, row)=>{
      const columns = $(row).find('td');
      const firstColumn = $(columns[0]).text();
      const secondColumn = $(columns[1]).text();
      const thirdColumn = $(columns[2]).text();

      // the 62 foods table
      // GI rows have a ± symbol in the second column
      if (secondColumn.indexOf('±') > -1){
        data.push({
          'food' : firstColumn,
          'gi' : extractGi(secondColumn)
        });
      }

      // the other massive table with 2,600 + foods
      // GI rows have the ± symbol or a number in the 3rd column
      if (addTheLongList) {
        if (thirdColumn.indexOf('±') > -1 || !isNaN(parseInt(thirdColumn))) {
          data.push({
            'food' : secondColumn,
            'gi' : extractGi(thirdColumn)
          });
        }
      }
    });
  });
  return data;
};
