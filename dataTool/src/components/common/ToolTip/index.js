import React, { PropTypes } from 'react'

import { Container } from './styled-components'

const ToolTip = ({ children, text, position, length }) =>
  <Container>
    <span data-balloon={text} data-balloon-pos={position} data-balloon-length={length}>
      {children}
    </span>
  </Container>

ToolTip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  length: PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
  children: PropTypes.any.isRequired,
}

ToolTip.defaultProps = {
  position: 'up',
  length: 'large',
}

export default ToolTip
