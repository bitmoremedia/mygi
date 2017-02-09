import React from 'react';
import classNames from 'classnames';

import './style';
import PageLink from '../common/PageLink';
import SiteContent from '../common/SiteContent';
import logoImage from '../../img/mygi-app-icon.png';

const SiteHeader = ({activePath}) => {

  const giPathActive = (activePath.indexOf("/glycemic-index/") > -1);
  const aboutPathActive = (activePath.indexOf("/about") > -1);

  const giLinkClass = classNames('site-header__page-link', {'site-header__page-link--active' : giPathActive});
  const aboutLinkClass = classNames('site-header__page-link', {'site-header__page-link--active' : aboutPathActive});

  return (
    <div className='site-header'>
      <SiteContent>
        <PageLink className='site-header__home-link' to={'/'}>
          <img className='site-header__logo-image' src={logoImage} />
        </PageLink>
        <div className='site-header__page-links'>
          <PageLink className='site-header__page-link-container' to={'/glycemic-index'}>
            <div className={giLinkClass}>
              Gylcemic Index
            </div>
          </PageLink>
          <PageLink className='site-header__page-link-container' to={'/about'}>
            <div className={aboutLinkClass}>
              About
            </div>
          </PageLink>
        </div>
      </SiteContent>
    </div>
  );
};

export default SiteHeader;