const fs = require('fs-extra');
const _forEach = require('lodash/forEach');

// api wrapper
module.exports = ({ url, method, params, body }) => {
  return new Promise((resolve, reject) => {
    if ( method === 'GET' ){
      switch (params[0]) {
        case 'data-sources':
          getDataSources(resolve, reject);
          break;
        case 'food-list':
          getFoodList(resolve, reject);
          break;
        case 'categories':
          getCategories(resolve, reject);
          break;
        default:
          resolve({ url, method, params });
      }
    }
    if ( method === 'POST' ){
      switch (params[0]) {
        case 'associate-source':
          associatedSource(resolve, reject, 'add', body);
          break;
        default:
          resolve({ url, method, params });
      }
    }
    if ( method === 'DELETE' ){
      switch (params[0]) {
        case 'associate-source':
          associatedSource(resolve, reject, 'delete', body);
          break;
        default:
          resolve({ url, method, params });
      }
    }
    resolve({ url, method, params });
  });
};

const path = {
  foodListDirectory: './dataTool/db/',
  foodList: './dataTool/db/foodList.json',
  dataSource: './dataTool/extracts',
  dataSources: '../extraction/sources.json',
  categories: '../../data/glycemic-index-categories.json',
};

const dataSources = require(path.dataSources);

function getDataSources(resolve, reject){
  try {
    const dataSourceObj = {};
    dataSources.forEach((source)=>{
      const sourceData  = fs.readJsonSync(`${path.dataSource}/${source.name}.json`);
      dataSourceObj[source.name]={
        name: source.name,
        title: source.title,
        data: sourceData
      };
    });
    resolve(dataSourceObj);
  } catch (e) {
    console.log('Error in getDataSources - make sure they all exist');
    reject(e);
  }
}

function getFoodList(resolve, reject){
  let foodList = [];
  try {
    foodList = fs.readJsonSync(path.foodList);
  } catch(err){
    console.log('error in getFoodList');
    reject(err);
  }
  resolve(foodList);
}

function getCategories(resolve, reject){
  const giCategories = require(path.categories);
  const categories = giCategories.map((category)=>category.category);
  resolve(categories);
}

function associatedSource(resolve, reject, mode, body){
  const { foodId, sourceName, sourceId } = body;
  if (mode !== 'add' &&  mode !== 'delete') {
    reject(`Mode not supported`);
  }
  if (!foodId || !sourceName || !sourceId) {
    reject("Missing params");
  }
  try {
    // get current foodList
    let matched = false;
    let foodList = fs.readJsonSync(path.foodList);
    _forEach(foodList, (food) => {
      if (food.id === foodId) {
        matched = true;
        if (mode === 'add') {
          food.sources[sourceName] = sourceId;
        }
        if (mode === 'delete'){
          delete food.sources[sourceName];
        }
      }
    })
    if (matched){
      fs.writeFile(path.foodList, JSON.stringify(foodList), 'utf8');
      resolve({status:"success"});
    }
    reject(`No food matched with id: ${foodId}`);
  }
  catch(err){
   console.log('error in getFoodList');
   reject(err);
  }
}
