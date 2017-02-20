const fs = require('fs-extra')
const path = require('path')
const _forEach = require('lodash/forEach')

const foodListPath = path.join(__dirname, '..', 'db', 'foodList.json')
const foodList = fs.readJsonSync(foodListPath)

const giData = [];

_forEach(foodList, (food)=>{
  giData.push({
    name: food.name,
    category: food.category,
    gi: food.gi,
    id: food.id
  });
})

const giDataPath = path.join(__dirname, '..', '..', 'data', 'gi-data.json')

try {
  fs.writeFile(giDataPath, JSON.stringify(giData), 'utf8')
} catch(err){
  throw(new Error(`Problem publishing gi-data to file`))
}

console.log('Gi data publish success');
