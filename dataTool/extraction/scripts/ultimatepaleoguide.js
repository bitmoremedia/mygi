const cheerio = require('cheerio')

module.exports = (html) => {
  let food
  const data = {}
  const $ = cheerio.load(html)
  const $dataTable = $('table')
  if ($dataTable.length ) {
     const rows = $dataTable.find('tr')
     rows.each((index, row)=>{
       const columns = $(row).find('td')
       // GI rows have a numeric second column
       const firstColumn = $(columns[0]).text()
       const secondColumn = $(columns[1]).text()
       if (!isNaN(parseInt(secondColumn, 10))) {
         let foodName = firstColumn.trim()
         foodName = foodName.replace(/, average/g,'')
         foodName = foodName.replace(/average/g,'')
         food = {
           'id' : 'ultimatepaleoguide-'+foodName.replace(/\s+/g, '-').toLowerCase(),
           'name' : foodName,
           'gi' : secondColumn
         }
         if (!data[food.id]){
           data[food.id] = food
         }
       }
     })
  }
  return data
}
