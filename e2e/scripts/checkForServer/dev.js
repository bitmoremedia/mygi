const config = require('../../globals/dev');
const serverCheck = require('./index');

serverCheck(config.host_url);
