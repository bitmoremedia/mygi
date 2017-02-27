const config = {
  protocal: 'http',
  host: 'localhost',
  port: 8787,
}
config.host_url = (config.port) ? `${config.protocal}://${config.host}:${config.port}` : `${config.protocal}://${config.host}`;

module.exports = config;
