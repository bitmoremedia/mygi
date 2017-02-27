const request = require('request')

// if test server is not already running then start her up
request('http://localhost:8787', (err) => {
  if (err) {
    console.log('******************** BAD LUCK **********************')
    console.log('It looks like the Test Server is not running so you cannot run E2E tests')
    console.log('Kick it off with `$ npm run start-test-server`')
    console.log('And then try running the E2E tests again in a new console window')
    process.exit(1)
    return false
  }
  return true
})
