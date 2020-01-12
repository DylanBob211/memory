import { useState, useEffect } from 'react';
import Timer from './Timer';

const useGameSetup = (
  arrayOfCards, { movesLimitMultiplier, timeLimitMultiplier, currentLevel },
) => {
  const timeLimitInMs = timeLimitMultiplier * currentLevel.level;
  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState('00:00');
  const [moveLimit, setMoveLimit] = useState(0);
  const [timeLimit, setTimeLimit] = useState('');
  const [timer] = useState(Timer(setTime, timeLimitInMs));
  const doubleArray = array => [...array, ...array];
  const shuffle = array => array.sort(() => Math.random() - 0.5);

  const resetMatch = () => {
    const timeLimitInMs = timeLimitMultiplier * currentLevel.level;
    timer.setTimelimit(timeLimitInMs);
    timer.reset();
    setMoves(0);
    const cards = shuffle(doubleArray(arrayOfCards))
      .map((card, index) => ({
        selected: false,
        matched: false,
        name: card.name,
        img: card.img,
        index,
      }));
    setCards(cards);
    timer.start();
    return cards;
  };

  useEffect(() => {
    if (arrayOfCards) {
      const cards = resetMatch();
      if (movesLimitMultiplier !== 0) {
        setMoveLimit(cards.length * movesLimitMultiplier);
      }
      if (timeLimitMultiplier !== 0) {
        setTimeLimit(timer.parseMsToTimestring(timeLimitInMs));
      }
    }
    return () => timer.stop();
  }, [arrayOfCards, movesLimitMultiplier, timeLimitMultiplier]);

  return {
    resetMatch,
    cards,
    setCards,
    moveLimit,
    moves,
    setMoves,
    time,
    timeLimit,
    timer,
  };
};

export default useGameSetup;
