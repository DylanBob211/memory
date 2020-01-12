import React from 'react';
import useMemoryGame from '../../hooks/useMemoryGame/useMemoryGame';
import LevelData from './LevelData/LevelData';
import Card from './Card/Card';
import GameWonModal from '../Modals/GameWonModal/GameWonModal';
import GameLostModal from '../Modals/GameLostModal/GameLostModal';
import { Cardboard, GameWrapper, GameBackButton } from './GameElements';

const Game = ({
  currentLevel, closeGame, setNextLevel, settings,
}) => {
  const {
    cards,
    selectCard,
    moves,
    isGameWon,
    resetGameState,
    time,
    moveLimit,
    timeLimit,
    isGameLost,
    resetMatch,
  } = useMemoryGame(currentLevel.cards, settings);

  const handleNextLevel = () => {
    setNextLevel();
    resetGameState();
    resetMatch();
  };
  const handeRetryLevel = () => {
    resetGameState();
    resetMatch();
  };

  const mapCards = () => cards
    .map((card, index) => (
      <Card
        key={card.name + index}
        handleClick={selectCard}
        cardsAmount={currentLevel.cardsAmount} // for styling purposes
        {...card}
      />
    ));

  return (
    <GameWrapper>
      {isGameWon
        && (
        <GameWonModal
          level={currentLevel.level}
          handleNextLevel={handleNextLevel}
        />
        )}
      {isGameLost
        && (
        <GameLostModal
          handleRetryLevel={handeRetryLevel}
        />
        )}
      <LevelData
        level={currentLevel.level}
        cardsAmount={currentLevel.cardsAmount}
        moves={moves}
        timer={time} // TODO: add timer
        timeLimit={timeLimit || null} // TODO: add settings prop
        moveLimit={moveLimit || null}
        closeGame={closeGame}
      />
      <Cardboard
        cardsAmount={cards.length}
      >
        {mapCards()}
      </Cardboard>
      <GameBackButton
        onClick={closeGame}
      />
    </GameWrapper>
  );
};

export default Game;
