import React from 'react';
import Rodal from 'rodal';

// note: this component has a dependency on global styles
// import 'rodal/lib/rodal.css';

import { ModalContainer } from './styles';

const modalProps = {
  visible: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  measure: React.PropTypes.string,
  children: React.PropTypes.any.isRequired,
}

const Modal = ({ children, visible, onClose, width, height, measure }) => {

  // stop body scrolling when modal is open
  if (visible){
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
      <Rodal visible={visible} onClose={onClose} width={width} height={height} measure={measure}>
        <ModalContainer>
          {children}
        </ModalContainer>
      </Rodal>
  );
}

Modal.propTypes = modalProps;

export default Modal;
