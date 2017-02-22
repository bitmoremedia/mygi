import React from 'react'
import Helmet from 'react-helmet'

import PageLink from '../common/PageLink'

import './style.scss'
import AppFoodListImg1 from './app-food-list.png'
import AppFoodListImg2 from './app-food-category.png'
import AppFoodListImg3 from './app-favourites.png'

// gatsby global workaround
let config = {}
try {
  const gatsbyConfig = require('config') // eslint-disable-line
  config = gatsbyConfig.config
} catch (e) {
  // do nothing as this is part of our gatsby mega hack
}

const LandingPage = () =>
  <div className="site-landing-page">
    <Helmet
      title={`${config.siteTitle}`}
      meta={[
        {
          name: `${config.siteTitle}`,
          content: `${config.siteDescription}`,
        },
        { property: 'og:title', content: `${config.siteTitle}` },
        { property: 'og:description', content: `${config.siteDescription}` },
        { property: 'og:image', content: `${config.appIcon}` },
        { property: 'og:url', content: `${config.baseUrl}${config.linkPrefix}` },
        { property: 'og:site_name', content: `${config.siteTitle}` },
      ]}
    />
    <h1 className="site-landing-page__heading">Welcome to MyGi</h1>
    <p>The companion site for the <b>MyGi</b> health App coming soon to iOS and Android</p>
    <div>
      <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg1} alt="Mobile App Screen Shot 1" />
      <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg2} alt="Mobile App Screen Shot 2" />
      <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg3} alt="Mobile App Screen Shot 3" />
    </div>
    <div className="site-landing-page__gi-link" >
      <PageLink to={'/glycemic-index/'}>
        <button>Glycemic Index Food List</button>
      </PageLink>
    </div>
  </div>

export default LandingPage
