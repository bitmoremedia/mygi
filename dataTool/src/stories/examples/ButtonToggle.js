import React, { Component } from 'react'

import Button from '../../components/common/Button'

class ButtonToggle extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: false,
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { toggleShow } = this
    const { show } = this.state
    return (
      <div>
        <Button onClick={toggleShow}>Toggle Display</Button>
        { show && <div>Hello</div> }
      </div>
    );
  }
}

export default ButtonToggle
