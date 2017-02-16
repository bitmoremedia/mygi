import React, { PropTypes } from 'react';
import Rodal from 'rodal';

// note: this component has a dependency on global styles
// import 'rodal/lib/rodal.css';

import { ModalContainer } from './styles';

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

Modal.propTypes =  {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Modal;
