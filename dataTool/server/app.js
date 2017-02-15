const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const api = require('./api');

app.use(bodyParser.json());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.all('/', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();

  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");

  if (req.method === "OPTIONS") {
      return res.status(200).end();
  }

  return next();

});

app.post('/api/*', (req, res) => {
  const { url, method, params, body } = req;
  api({url, method, params, body})
    .then((response)=>{
      res.status(201);
      res.json(response);
    })
    .catch((err)=>{
      res.status(400);
      res.json({error: err})
    });
});

app.delete('/api/*', (req, res) => {
  const { url, method, params, body } = req;
  api({url, method, params, body})
    .then((response)=>{
      res.status(204);
      res.json(response);
    })
    .catch((err)=>{
      res.status(400);
      res.json({error: err})
    });
});

app.get('/api/*', (req, res) => {
  const { url, method, params } = req;
  api({url, method, params})
    .then((response)=>{
      res.status(200);
      res.json(response);
    })
    .catch((err)=>{
      res.status(400);
      res.json({error: err})
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
