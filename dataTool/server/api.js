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

function sortArrayByProperty(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};

function getDataSources(resolve, reject){
  try {
    const dataSourcesList = [];
    dataSources.forEach((source)=>{
      const sourceData = require(`../extracts/${source.name}.json`);
      dataSourcesList.push({
        name: source.name,
        title: source.title,
        data: sourceData.sort(sortArrayByProperty('name'))
      });
    });
    resolve(dataSourcesList);
  } catch (e) {
    console.log('Error in getDataSources - make sure they all exist');
    reject(e);
  }
}

function getFoodList(resolve, reject){
  const foodList = [];
  const foodListMap = require('../db/foodList.json');
  for (let key in foodListMap) {
    if ({}.hasOwnProperty.call(foodListMap, key)) {
      foodList.push({...foodListMap[key], id:key});
    }
  }
  resolve(foodList);
}

function getCategories(resolve, reject){
  const giCategories = require('../../data/glycemic-index-categories.json');
  const categories = giCategories.map((category)=>category.category);
  resolve(categories);
}
