import React from 'react';
import classNames from 'classnames';

import './style';
import PageLink from '../common/PageLink';
import SiteContent from '../common/SiteContent';
import logoImage from '../../img/mygi-app-icon.png';

const SiteHeader = ({activePath}) => {

  const giPathActive = (activePath.indexOf("/glycemic-index/") > -1);
  const aboutPathActive = (activePath.indexOf("/about") > -1);

  const giLinkClass = classNames('site-header__page-link-container', {'site-header__page-link-container--active' : giPathActive});
  const aboutLinkClass = classNames('site-header__page-link-container', {'site-header__page-link-container--active' : aboutPathActive});

  return (
    <div className='site-header'>
      <SiteContent className='site-content__site-header'>
        <PageLink className='site-header__home-link' to={'/'}>
          <img className='site-header__logo-image' src={logoImage} />
        </PageLink>
        <div className='site-header__page-links'>
          <PageLink className={giLinkClass} to={'/glycemic-index'}>
            <div className='site-header__page-link'>
              Gylcemic Index
            </div>
          </PageLink>
          <PageLink className={aboutLinkClass} to={'/about'}>
            <div className='site-header__page-link'>
              About
            </div>
          </PageLink>
        </div>
      </SiteContent>
    </div>
  );
};

export default SiteHeader;
