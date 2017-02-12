const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const api = require('./api');

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/*', function(req, res){
  const { url, method, params } = req;
  api({url, method, params})
    .then((response)=>{
      res.json(response);
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
