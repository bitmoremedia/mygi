const request = require('request')

module.exports = hostUrl =>
  request(hostUrl, (err) => {
    if (err) {
      console.log('******************** BAD LUCK **********************')
      console.log(`It looks like the Test Server (${hostUrl}) is not running so you cannot run E2E tests`)
      console.log('Kick it off with `$ npm run start-test-server`')
      console.log('And then try running the E2E tests again in a new console window')
      process.exit(1)
      return false
    }
    return true
  })
