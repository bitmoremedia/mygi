module.exports = {
  'My Gi Landing Page': (browser) => {
    browser
      .url('http://localhost:8787/')
      .waitForElementVisible('body', 1000)

    // page heading appears
    browser.expect.element('.site-landing-page__heading').to.be.present

    browser.end()
  },
}
