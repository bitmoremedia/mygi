import React from 'react';

import './style';

const SiteContent = ({children}) => {

  return (
    <div className='site-content'>
      <div className='site-content__inner'>
        {children}
      </div>
    </div>
  );
};

export default SiteContent;
