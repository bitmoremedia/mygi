module.exports = {
  src_folders: ['e2e/tests'],
  output_folder: 'e2e/reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: 'e2e/globals/public',

  selenium: {
    start_process: true,
    server_path: 'e2e/bin/selenium-server-standalone-3.1.0.jar',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': 'e2e/bin/chromedriver',
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
}
