module.exports = {
  'Glycemic Index Sub Page': (browser) => {
    browser.url('http://localhost:8787/glycemic-index/low-gi/cereals/')
    // page body loads
    browser.waitForElementVisible('body', 1000)
    // the 'Glycemic Index' link in the header is active
    browser.expect.element('.site-header__page-link-container--active').text.to.contain('Glycemic Index')
    // the 'Glycemic Index' link in the footer is active
    browser.expect.element('.site-footer__link--active').text.to.contain('Glycemic Index')
    // the active filters are not the 'All' filters
    browser.expect.element('.gi-data-filter__filter-item--active').to.be.present
    browser.expect.element('.gi-data-filter__filter-item--active').text.to.not.contain('ALL')
    // we have some data rows
    browser.expect.element('.gi-data-table__table tbody tr').to.be.present
    browser.end()
  },
}
