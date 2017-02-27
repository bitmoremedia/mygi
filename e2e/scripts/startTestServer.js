const request = require('request')
const liveServer = require('live-server')
const path = require('path')

const publicPath = path.resolve(__dirname, '..', '..', 'public')
const params = {
  port: 8787,
  host: 'localhost',
  root: publicPath,
  open: false,
}

// if test server is not already running then start her up
request('http://localhost:8787', (err) => {
  if (err) {
    liveServer.start(params)
  } else {
    console.log('test server already running')
  }
  return true
})
