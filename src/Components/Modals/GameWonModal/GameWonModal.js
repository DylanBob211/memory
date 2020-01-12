import React from 'react';
import Modal from '../Modal';
import { FinalMessage } from './GameWonModalElements';
import { MainMessage, ModalButton as NextLevelButton } from '../ModalElements';

const GameWonModal = ({ handleNextLevel, level }) => (
  <Modal>
    <MainMessage>
      {(level >= 1 && level <= 3) ? `
        That was ${(level !== 1 && level <= 3) ? 'still' : ''} easy!
      ` : 'Well done'}
    </MainMessage>

    {level !== 10 ? (
      <NextLevelButton onClick={handleNextLevel}>
        Try out the next one
      </NextLevelButton>
    )
      : (
        <FinalMessage>
          You have completed all the levels available!
        </FinalMessage>
      )}
  </Modal>
);

export default GameWonModal;
