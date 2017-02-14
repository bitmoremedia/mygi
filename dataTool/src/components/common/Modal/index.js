import React from 'react';
import Rodal from 'rodal';

// note: this component has a dependency on global styles
// import 'rodal/lib/rodal.css';

const modalProps = {
  visible: React.PropTypes.bool.isRequired,
  onClose: React.PropTypes.func.isRequired,
  width: React.PropTypes.width,
  height: React.PropTypes.height,
  children: React.PropTypes.any.isRequired,
}

const Modal = ({ children, visible, onClose, width, height }) => {
  return (
      <Rodal visible={visible} onClose={onClose} width={width} height={height}>
        {children}
      </Rodal>
  );
}

Modal.propTypes = modalProps;

export default Modal;
