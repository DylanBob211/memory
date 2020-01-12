import React from 'react';
import LevelBox from './LevelBox/LevelBox';
import { LevelSelectionWrapper, LevelsContainer, LevelSelectionBackButton } from './LevelSelectionElements';

const LevelSelection = ({ levels, setLevel, closeLevelSelection }) => (
  <LevelSelectionWrapper>
    <LevelsContainer>
      {levels.map((level, index) => (<LevelBox key={`${level.cardAmount}-${index}`} level={level} handleClick={setLevel} />))}
    </LevelsContainer>
    <LevelSelectionBackButton onClick={closeLevelSelection} />
  </LevelSelectionWrapper>

);

export default LevelSelection;
