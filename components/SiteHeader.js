import React from 'react';

import { config } from 'config';
import PageLink from './common/PageLink';

const SiteHeader = ({ activePath }) => {

  const gylcemicIndexPathActive = (activePath.indexOf("/glycemic-index/") > -1);
  const aboutPathActive = (activePath.indexOf("/about") > -1);

  return (
    <div className='site-header'>
      <PageLink to={'/'}>
        <h1>
          MyGi
        </h1>
      </PageLink>
      <PageLink to={'/glycemic-index'}>
        <div>
          Gylcemic Index {gylcemicIndexPathActive && '*'}
        </div>
      </PageLink>
      <PageLink to={'/about'}>
        <div>
          About {aboutPathActive && '*'}
        </div>
      </PageLink>
    </div>
  );
};

export default SiteHeader;
