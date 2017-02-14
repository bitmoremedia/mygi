import React from 'react';

import { Container } from './styles';

const toolTipProps = {
  text: React.PropTypes.string.isRequired,
  position: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  length: React.PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
  children: React.PropTypes.any.isRequired,
}

const ToolTip = ({ children, text, position, length }) => {
  return (
    <Container>
      <span data-balloon={text} data-balloon-pos={position} data-balloon-length={length}>
        {children}
      </span>
    </Container>
  );
}

ToolTip.propTypes = toolTipProps;

export default ToolTip;
