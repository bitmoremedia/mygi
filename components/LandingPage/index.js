import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';

import { config } from 'config';
import './style';
import PageLink from '../common/PageLink';

import AppFoodListImg1 from './app-food-list.png';
import AppFoodListImg2 from './app-food-category.png';
import AppFoodListImg3 from './app-favourites.png';

const LandingPage = ({activePath}) => {
  const activeLink = (linkPath) => {
    if (linkPath === activePath || `${linkPath}/` === activePath) {
      return 'site-footer__link--active';
    }
    if (linkPath == '/glycemic-index' &&  activePath.indexOf('/glycemic-index') > -1) {
      return 'site-footer__link--active';
    }
    return 'site-footer__link';
  };

  return (
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
        <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg1} role="presentation"/>
        <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg2} role="presentation"/>
        <img className="site-landing-page__app-screen-grab-img" src={AppFoodListImg3} role="presentation"/>
      </div>
      <div className="site-landing-page__gi-link" >
        <PageLink to={'/glycemic-index/'}>
          <button>Glycemic Index Food List</button>
        </PageLink>
      </div>
    </div>
  );
};

export default LandingPage;
