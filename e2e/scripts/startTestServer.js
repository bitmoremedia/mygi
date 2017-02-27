const request = require('request')
const liveServer = require('live-server')
const path = require('path')
const config = require('../globals')

const publicPath = path.resolve(__dirname, '..', '..', 'public')
const params = {
  port: config.port,
  host: config.host,
  root: publicPath,
  open: false,
}

// if test server is not already running then start her up
request(config.host_url, (err) => {
  if (err) {
    liveServer.start(params)
  } else {
    console.log('test server already running')
  }
  return true
})
