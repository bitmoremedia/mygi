const baseUrl = 'http://localhost:9000/api/'

function getRequest(target) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${target}`)
      .then(response => resolve(response.json()))
      .catch(err => reject(err))
  })
}

function postRequest(target, data) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${target}`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
    .then(response => resolve(response.json()))
    .catch(err => reject(err))
  })
}

function deleteRequest(target, data) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${target}`, {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
    .then(() => resolve())
    .catch(err => reject(err))
  })
}

export const getDataSources = () => getRequest('data-sources')
export const getFoodList = () => getRequest('food-list')
export const getCategories = () => getRequest('categories')
export const postAssociateDataSource = data => postRequest('associate-source', data)
export const postFoodItem = data => postRequest('food-item', data)
export const deleteAssociatedDataSource = data => deleteRequest('associate-source', data)
export const deleteFoodItem = data => deleteRequest('food-item', data)
