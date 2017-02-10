import React from 'react';
import classNames from 'classnames';

import './style';

const SiteContent = ({children, page, className}) => {

  const wrapperClass = classNames('site-content', { [className]: className });

  if (page){
    return (
      <div className={wrapperClass}>
        <div className='site-content__page'>
          <div className='site-content__inner'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className='site-content__inner'>
        {children}
      </div>
    </div>
  );
};

export default SiteContent;
