import { useState } from 'react';

const useSettings = (currentLevel) => {
  const [movesLimitMultiplier, setMovesLimitMultiplier] = useState(0);
  const [timeLimitMultiplier, setTimeLimitMultiplier] = useState(0);
  const [timeToMemorizeCards, setTimeToMemorizeCards] = useState(1000); // in milliseconds;

  return {
    movesLimitMultiplier,
    setMovesLimitMultiplier,
    timeLimitMultiplier,
    setTimeLimitMultiplier,
    timeToMemorizeCards,
    setTimeToMemorizeCards,
    currentLevel, // passed to calculate the total time limit for the level
  };
};

export default useSettings;
