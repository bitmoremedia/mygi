const liveServer = require('live-server')
const path = require('path')

const publicPath = path.resolve(__dirname, '..', '..', 'public')
const params = {
  port: 8787,
  host: 'localhost',
  root: publicPath,
  open: false,
}

liveServer.start(params)
