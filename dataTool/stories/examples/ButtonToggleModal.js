import React, { Component } from 'react'

import Button from '../../src/components/common/Button'
import Modal from '../../src/components/common/Modal'

class ButtonToggleModal extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
    }
    this.toggleShow = this.toggleShow.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  onClose() {
    this.setState({
      show: false
    })
  }

  render() {
    const { toggleShow, onClose } = this
    const { show } = this.state
    return (
      <div>
        <Button onClick={toggleShow}>Toggle Display</Button>
        <Modal visible={show} onClose={onClose}>Hello</Modal>
      </div>
    );
  }
}

export default ButtonToggleModal;
