import React, { PropTypes } from 'react'

import { AddButton, RemoveButton } from './styled-components'

const AddRemoveBtn = ({ onClick, type }) => {
  if (type === 'add') {
    return (
      <AddButton onClick={onClick}>
        Assign
      </AddButton>
    )
  }
  return (
    <RemoveButton onClick={onClick}>
      Un-Assign
    </RemoveButton>
  )
}

AddRemoveBtn.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['add', 'remove']),
}

AddRemoveBtn.defaultProps = {
  onClick: undefined,
  type: 'add',
}

export default AddRemoveBtn
