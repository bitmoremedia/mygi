const request = require('request')

module.exports = ({ url, name, script }) =>
  request(url, name, (err) => {
    const serverName = `${name} Server` || 'Server';
    if (err) {
      console.log('******************** BAD LUCK **********************')
      console.log(`It looks like the ${serverName} (${url}) is not running so you cannot run E2E tests`)
      console.log(`Kick it off with '${script}'`)
      console.log('And then try running the E2E tests again in a new console window')
      process.exit(1)
      return false
    }
    return true
  })
