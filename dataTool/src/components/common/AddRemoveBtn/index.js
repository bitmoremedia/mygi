import React, { PropTypes } from 'react';

import { Button } from './styles';

const AddRemoveBtn = ({ onClick, type }) => {
  const btnText = ( type === 'add' ) ? 'Assign' : 'Un-Assign' ;
  return (
    <Button onClick={onClick} type={type}>
      {btnText}
    </Button>
  );
}

AddRemoveBtn.propTypes =  {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['add', 'remove']),
};

export default AddRemoveBtn;
