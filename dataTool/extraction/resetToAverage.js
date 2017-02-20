const fs = require('fs-extra')
const path = require('path')
const _forEach = require('lodash/forEach')

const sources = require('./sources.json')
const dataSourceDirectory = path.join(__dirname, '..', 'extracts/')
const foodListPath = path.join(__dirname, '..', 'db', 'foodList.json')
const foodList = fs.readJsonSync(foodListPath)

const sourceData = {}
_forEach(sources, (source)=>{
  try {
    sourceData[source.name] = fs.readJsonSync(`${dataSourceDirectory}${source.name}.json`)
  } catch(err){
    throw(new Error(`Missing source file: ${source.name}`))
  }
})

const sourceAverage = (gi, sources)=>{
  let giTotal = 0, giCount = 0;
  _forEach(sources, (source, key)=>{
    const sourceGi = (sourceData[key] && sourceData[key][source]) ? sourceData[key][source].gi : 0
    if (parseInt(sourceGi, 10) > 0) {
      giTotal += parseInt(sourceGi, 10);
      giCount += 1;
    }
  })
  if ( giTotal > 0 && giCount > 0 ){
    // calculate average
    let giAverage = (giTotal/giCount).toFixed(0)
    // ensure that our average does not exceed 100
    return (giAverage>100) ? 100 : giAverage
  }
  return gi;
}

// apply source average to each food item
_forEach(foodList, (food)=>{
  food.gi = sourceAverage(food.gi, food.sources)
})

try {
  fs.writeFile(foodListPath, JSON.stringify(foodList), 'utf8')
} catch(err){
  throw(new Error(`Problem updating food list db file`))
}

console.log('Food List reset to average complete');
