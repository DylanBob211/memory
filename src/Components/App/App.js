import React, { useState, useEffect } from 'react';
import useLevels from '../../hooks/useLevels/useLevels';
import useSettings from '../../hooks/useSettings/useSettings';
import Landing from '../Landing/Landing';
import Game from '../Game/Game';
import LevelSelection from '../LevelSelection/LevelSelection';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import ErrorModal from '../Modals/ErrorModal/ErrorModal';
import './App.css';

const App = () => {
  const {
    levels, currentLevel, setCurrentLevel, error,
  } = useLevels(
    { levelsAmount: 10, cardAmountCoefficient: 2 }, // for API limits we can only make 10 levels
  );
  const settings = useSettings(currentLevel);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isLevelSelectionOpen, setLevelSelection] = useState(false);
  const [isSettingsMenuOpen, setSettingsMenu] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cards') === null) {
      setIsFirstTime(true);
    }
  }, []);

  const setLevelAndPlay = index => {
    setCurrentLevel(levels[index]);
    setIsPlaying(true);
    setLevelSelection(false);
  };

  const appRender = () => {
    if (isPlaying) {
      return (
        <Game
          settings={settings}
          currentLevel={currentLevel}
          closeGame={() => setIsPlaying(false)}
          setNextLevel={() => setCurrentLevel(currentLevel => levels[currentLevel.level])}
        />
      );
    }
    if (isLevelSelectionOpen) {
      return (
        <LevelSelection
          levels={levels}
          setLevel={setLevelAndPlay}
          closeLevelSelection={() => setLevelSelection(false)}
        />
      );
    }
    if (isSettingsMenuOpen) {
      return (
        <SettingsMenu
          {...settings}
          closeSettingsMenu={() => setSettingsMenu(false)}
        />
      );
    }
    return (
      <>
        <Landing
          currentLevel={currentLevel || null}
          handleStart={() => {
            setIsPlaying(true);
            if (isFirstTime) {
              setIsFirstTime(false);
            }
          }}
          isFirstTime={isFirstTime}
          openLevelSelection={() => setLevelSelection(true)}
          openSettingsMenu={() => setSettingsMenu(true)}
        />
        {error && <ErrorModal message={error} />}
      </>
    );
  };

  return appRender();
};

export default App;
