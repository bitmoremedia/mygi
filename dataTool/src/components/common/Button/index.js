import React, { PropTypes } from 'react';

import { Button } from './styles';

const ButtonComponent = ({ children, onClick, danger }) => {
  return (
    <Button onClick={onClick} danger={danger} >
      {children}
    </Button>
  );
}

ButtonComponent.propTypes =  {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  danger: PropTypes.bool,
};

export default ButtonComponent;
