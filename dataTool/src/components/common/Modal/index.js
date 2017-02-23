import React, { Component, PropTypes } from 'react';
import Rodal from 'rodal';

// note: this component has a dependency on global styles
// import 'rodal/lib/rodal.css';

import { ModalContainer } from './styled-components';

class Modal extends Component {

  constructor(props, context) {
    super(props, context);
    this.closeModalOnEscapePress = this.closeModalOnEscapePress.bind(this);
  }

  componentWillUnmount(){
    // remove listener for closing modal on press of escape key
    document.removeEventListener("keydown", this.closeModalOnEscapePress);
  }

  closeModalOnEscapePress(event) {
    if (event.keyCode === 27) {
      this.props.onClose(event);
    }
  }

  render() {
    const { closeModalOnEscapePress } = this;
    const { children, visible, onClose, width, height, measure } = this.props;
    // stop the background from scrolling (if scroll bars are on the page)
    if (visible){
      // add listener for closing modal on press of escape key
      document.addEventListener("keydown", closeModalOnEscapePress);
      if ( window.innerWidth > document.documentElement.clientWidth ){
        document.body.classList.add('modal-is-open');
      }
    } else {
      // remove listener for closing modal on press of escape key
      document.removeEventListener("keydown", closeModalOnEscapePress);
      document.body.classList.remove('modal-is-open');
    }

    return (
        <Rodal visible={visible} onClose={onClose} width={width} height={height} measure={measure}>
          <ModalContainer>
            {children}
          </ModalContainer>
        </Rodal>
    );
  }
}

Modal.propTypes =  {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Modal;
