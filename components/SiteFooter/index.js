import React from 'react';
import classNames from 'classnames';

import './style';
import SiteContent from '../common/SiteContent';
import PageLink from '../common/PageLink';

const SiteFooter = ({activePath}) => {
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
      <div className='site-footer'>
        <SiteContent>
          <ul className='site-footer__links'>
            <li>
              <PageLink className={activeLink('/')} to={'/'}>
                MyGi
              </PageLink>
            </li>
            <li>
              <PageLink className={activeLink('/glycemic-index')} to={'/glycemic-index'}>
                Gylcemic Index
              </PageLink>
            </li>
            <li>
              <PageLink className={activeLink('/about')} to={'/about'}>
                  About
              </PageLink>
            </li>
          </ul>
          <div>
            Website by <a className="site-footer__bmm-link" href="https://www.bitmoremedia.com" target="_blank">Bit More Media</a>
          </div>
        </SiteContent>
      </div>
  );
};

export default SiteFooter;
