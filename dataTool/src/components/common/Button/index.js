import React, { PropTypes } from 'react';

import { Button } from './styles';

const ButtonComponent = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}

ButtonComponent.propTypes =  {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};

export default ButtonComponent;
