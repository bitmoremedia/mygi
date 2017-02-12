// API 
module.exports = ({ url, method, params }) => {
  return new Promise(function(resolve, reject) {
    resolve({ url, method, params });
  });
};
