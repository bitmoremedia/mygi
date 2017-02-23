import React, { PropTypes } from 'react'

import { Button, DangerButton } from './styled-components'

const ButtonComponent = ({ children, onClick, danger }) => {
  if (danger) {
    return (
      <DangerButton onClick={onClick} >
        {children}
      </DangerButton>
    )
  }
  return (
    <Button onClick={onClick} >
      {children}
    </Button>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  danger: PropTypes.bool,
}

ButtonComponent.defaultProps = {
  onClick: undefined,
  danger: false,
}

export default ButtonComponent
