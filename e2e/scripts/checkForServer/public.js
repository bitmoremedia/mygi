const config = require('../../globals/public');
const serverCheck = require('./index');

serverCheck({
  url: config.host_url,
  name: 'Public Test',
  script: '$ npm run start-public-server',
});
