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

function postRequest(target, data) {
  return new Promise((resolve, reject)=>{
    fetch(`${baseUrl}${target}`,{
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      }),
    })
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

export const getFoodList = () => {
  return getRequest('food-list');
};

export const getCategories = () => {
  return getRequest('categories');
};

export const postAssociateDataSource = (data) => {
  return postRequest('associate-source', data);
};
