import React from 'react';
import Modal from '../Modal';
import { MainMessage } from '../ModalElements';

const ErrorModal = ({ message }) => (
  <Modal>
    <MainMessage>
      {message}
    </MainMessage>
  </Modal>
);

export default ErrorModal;
