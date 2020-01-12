import { useState, useEffect } from 'react';

const useGameMatchState = ({
  moves, moveLimit, time, cards, timer,
}) => {
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameLost, setIsGameLost] = useState(false);

  // Win game if all cards are matched
  const checkIfAllCardsMatched = cards => cards.every(card => card.matched);
  useEffect(() => {
    if (cards[0] && checkIfAllCardsMatched(cards)) {
      setIsGameWon(true);
      timer.stop();
    }
  }, [cards]);

  // Lose game if moves are over the moves limit and the player hasn't solved the puzzle
  useEffect(() => {
    if ((moves >= moveLimit) && (moveLimit !== 0)) {
      timer.stop();
      setIsGameLost(true);
      if (isGameWon) {
        setIsGameLost(false);
      }
    }
  }, [moves, isGameWon]);

  // Lose game if time is over the time limit
  useEffect(() => {
    if (timer.getTime() > timer.timeLimit && timer.timeLimit !== 0) {
      timer.stop();
      setIsGameLost(true);
    }
  }, [time]);

  const resetGameState = () => {
    setIsGameLost(false);
    setIsGameWon(false);
  };

  return {
    isGameLost,
    isGameWon,
    resetGameState,
  };
};

export default useGameMatchState;
