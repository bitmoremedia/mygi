const baseUrl = "http://localhost:9000/api/";

function getRequest(target) {
  return new Promise((resolve, reject)=>{
    fetch(`${baseUrl}${target}`)
    .then(function(response) {
      resolve(response.json());
    }).catch(function(err) {
      console.log('error', err);
      resolve([]);
    });
  });
}

export const getDataSources = () => {
  return getRequest('data-sources');
};

export const getDataSource = (source) => {
  console.log(`getDataSource: ${source}`);
  getDataSources
    .then((data)=>{
      console.log('all sources', data);
    })
  return [];
};

export const getFoodList = () => {
  return getRequest('food-list');
};

export const getCategories = () => {
  return getRequest('categories');
};
