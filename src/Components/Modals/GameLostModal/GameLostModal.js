import React from 'react';
import Modal from '../Modal';
import { MainMessage, ModalButton as RetryButton } from '../ModalElements';

const GameLostModal = ({ handleRetryLevel }) => (
  <Modal>
    <MainMessage>
      Oh no! Don't give up...
    </MainMessage>
    <RetryButton onClick={handleRetryLevel}>Try one more time</RetryButton>
  </Modal>
);

export default GameLostModal;
