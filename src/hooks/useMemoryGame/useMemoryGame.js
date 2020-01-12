import useGameSetup from './useGameSetup';
import useGameMatchState from './useGameMatchState';
import useGameplay from './useGameplay';

const useMemoryGame = (arrayOfCards, settings) => {
  const {
    resetMatch,
    cards,
    setCards,
    moveLimit,
    moves,
    setMoves,
    time,
    timeLimit,
    timer,
  } = useGameSetup(arrayOfCards, settings);

  const selectCard = useGameplay({
    cards, setCards, setMoves, settings,
  });

  const gameState = useGameMatchState({
    moves, moveLimit, cards, time, timer,
  });

  return {
    selectCard,
    cards,
    moves,
    time,
    timeLimit,
    moveLimit,
    resetMatch,
    ...gameState,
  };
};

export default useMemoryGame;
