module.exports = {
  'About Page': (browser) => {
    browser.url(`${browser.globals.host_url}/about`)
    // page body loads
    browser.waitForElementVisible('body', 1000)
    // the 'About' link in the header is active
    browser.expect.element('.site-header__page-link-container--active').text.to.contain('About')
    // the 'About' link in the footer is active
    browser.expect.element('.site-footer__link--active').text.to.contain('About')
    browser.end()
  },
}
