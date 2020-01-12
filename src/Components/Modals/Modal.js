import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBox } from './ModalElements';

const Modal = ({ children }) => (
  ReactDOM.createPortal(
    <ModalBox>
      {children}
    </ModalBox>,
    document.getElementById('modal-root'),
  )
);

export default Modal;
