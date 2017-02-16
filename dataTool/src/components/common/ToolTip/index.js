import React, { PropTypes } from 'react';

import { Container } from './styles';

const ToolTip = ({ children, text, position, length }) => {
  return (
    <Container>
      <span data-balloon={text} data-balloon-pos={position} data-balloon-length={length}>
        {children}
      </span>
    </Container>
  );
}

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  length: PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
  children: PropTypes.any.isRequired,
};

export default ToolTip;
