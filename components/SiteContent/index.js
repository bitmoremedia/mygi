import React from 'react';

import './style';

const SiteContent = ({children}) => {

  return (
    <div className='site-content'>
      <div className='site-content__page'>
        {children}
      </div>
    </div>
  );
};

export default SiteContent;
