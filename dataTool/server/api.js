// API wrapper
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

const dataSources = require('../extraction/sources.json');

function getDataSources(resolve, reject){
  try {
    const dataSourceObj = {};
    dataSources.forEach((source)=>{
      const sourceData = require(`../extracts/${source.name}.json`);
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
  const foodList = require('../db/foodList.json');
  resolve(foodList);
}

function getCategories(resolve, reject){
  const giCategories = require('../../data/glycemic-index-categories.json');
  const categories = giCategories.map((category)=>category.category);
  resolve(categories);
}
