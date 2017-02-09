import React from 'react';
import classNames from 'classnames';

import './style';

const SiteContent = ({children, page}) => {

  if (page){
    return (
      <div className='site-content'>
        <div className='site-content__page'>
          <div className='site-content__inner'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='site-content'>
      <div className='site-content__inner'>
        {children}
      </div>
    </div>
  );
};

export default SiteContent;
