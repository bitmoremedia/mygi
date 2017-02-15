const fs = require('fs-extra');

// api wrapper
module.exports = ({ url, method, params }) => {
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
    resolve({ url, method, params });
  });
};

const path = {
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
