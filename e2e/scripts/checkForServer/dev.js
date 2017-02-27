const config = require('../../globals/dev');
const serverCheck = require('./index');

serverCheck({
  url: config.host_url,
  name: 'Development',
  script: '$ npm run develop',
});
