module.exports = {
  'Glycemic Index Page': (browser) => {
    browser.url('http://localhost:8787/glycemic-index/')
    // page body loads
    browser.waitForElementVisible('body', 1000)
    // the 'Glycemic Index' link in the header is active
    browser.expect.element('.site-header__page-link-container--active').text.to.contain('Glycemic Index')
    // the 'Glycemic Index' link in the footer is active
    browser.expect.element('.site-footer__link--active').text.to.contain('Glycemic Index')

    // initially the active filters are both 'All'
    browser.expect.element('.gi-data-filter__filter-item--active').text.to.contain('ALL')
    // we have rows in the data table
    browser.expect.element('.gi-data-table__table tbody tr').to.be.present

    // TODO: select a category type

    // TODO: select a gi type

    // non-matching search filter shows no results
    browser.setValue('.gi-data-text-filter__input', 'somecrazytextthatwillmatchnothing')
    browser.pause(1000)
    browser.expect.element('.gi-data-table__table tbody tr').to.be.not.present

    browser.clearValue('.gi-data-text-filter__input')

    // matching search filter shows some results
    browser.setValue('.gi-data-text-filter__input', 'bean')
    browser.pause(1000)
    browser.expect.element('.gi-data-table__table tbody tr').to.be.present

    browser.end()
  },
}
