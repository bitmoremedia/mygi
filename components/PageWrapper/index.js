import React from 'react';

import './style';

const SiteWrapper = ({children}) => {
  return (
      <div className='page-wrapper'>
        {children}
      </div>
  );
};

export default SiteWrapper;
