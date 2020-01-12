import { useState, useEffect } from 'react';
import levelMaker from './levelMaker';

const useLevels = ({ levelsAmount = 2, cardAmountCoefficient = 2 }) => {
  const [levels, setLevels] = useState();
  const [currentLevel, setCurrentLevel] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!levels) {
      levelMaker(levelsAmount, cardAmountCoefficient)
        .then(values => setLevels(values))
        .catch(error => setError(error.message));
    }
    if (!currentLevel && levels) {
      setCurrentLevel(levels[0]); // TODO first time level[0]
    }
  }, [levels, currentLevel]);

  return {
    levels,
    currentLevel,
    setCurrentLevel,
    error,
  };
};

export default useLevels;
