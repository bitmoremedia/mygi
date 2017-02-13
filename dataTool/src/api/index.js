const baseUrl = "http://localhost:9000/api/";

export const getDataSources = () => {
  return new Promise((resolve, reject)=>{
    fetch(`${baseUrl}data-sources`)
    .then(function(response) {
      resolve(response.json());
    }).catch(function(err) {
      console.log('error', err);
      resolve([]);
    });
  });
};

export const getFoodList = () => {
  return new Promise((resolve, reject)=>{
    fetch(`${baseUrl}food-list`)
    .then(function(response) {
      resolve(response.json());
    }).catch(function(err) {
      console.log('error', err);
      resolve([]);
    });
  });
};
