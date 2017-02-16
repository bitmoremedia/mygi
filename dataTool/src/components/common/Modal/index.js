import React, { PropTypes } from 'react';
import Rodal from 'rodal';

// note: this component has a dependency on global styles
// import 'rodal/lib/rodal.css';

import { ModalContainer } from './styles';

const Modal = ({ children, visible, onClose, width, height, measure }) => {

  // stop the background from scrolling (if scroll bars are on the page)
  if (visible){
    if ( window.innerWidth > document.documentElement.clientWidth ){
      document.body.classList.add('modal-is-open');
    }
  } else {
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

Modal.propTypes =  {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  measure: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Modal;
