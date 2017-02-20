const cheerio = require('cheerio')

const addTheLongList = false

function extractGi(text){
  let end = (text.indexOf('±') > -1) ? text.indexOf('±') : text.length
  return text.substring(0,end)
}

module.exports = (html) => {
  let food
  const data = {}
  const $ = cheerio.load(html)
  const $dataTables = $('table')
  $dataTables.each((index, table)=>{
    const rows = $(table).find('tr')
    rows.each((index, row)=>{
      const columns = $(row).find('td')
      const firstColumn = $(columns[0]).text()
      const secondColumn = $(columns[1]).text()
      const thirdColumn = $(columns[2]).text()

      // the 62 foods table
      // GI rows have a ± symbol in the second column
      if (secondColumn.indexOf('±') > -1){
        food = {
          'id' : 'mendosa-'+firstColumn.trim().replace(/\s+/g, '-').toLowerCase(),
          'name' : firstColumn.trim(),
          'gi' : extractGi(secondColumn)
        }
        if (!data[food.id]){
          data[food.id] = food
        }
      }

      // the other massive table with 2,600 + foods
      // GI rows have the ± symbol or a number in the 3rd column
      if (addTheLongList) {
        if (thirdColumn.indexOf('±') > -1 || !isNaN(parseInt(thirdColumn, 10))) {
          food = {
            'id' : 'mendosa-'+secondColumn.trim().replace(/\s+/g, '-').toLowerCase(),
            'name' : secondColumn.trim(),
            'gi' : extractGi(thirdColumn)
          }
          if (!data[food.id]){
            data[food.id] = food
          }
        }
      }
    })
  })
  return data
}
