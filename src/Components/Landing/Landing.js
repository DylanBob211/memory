import React from 'react';
import { ReactComponent as Brain } from '../Icons/brain.svg';
import { LandingTitle, MenuButton, LandingWrapper } from './LandingElements';

const Landing = ({
  currentLevel, handleStart, isFirstTime, openLevelSelection, openSettingsMenu,
}) => (
  <LandingWrapper>
    <LandingTitle>
        Memory
      <Brain width="10rem" />
    </LandingTitle>
    { (currentLevel && isFirstTime) && <MenuButton onClick={handleStart}> Start </MenuButton> }
    { !isFirstTime && <MenuButton onClick={openLevelSelection}> Levels </MenuButton>}
    { !isFirstTime && (<MenuButton onClick={openSettingsMenu}> Settings </MenuButton>)}
  </LandingWrapper>
);

export default Landing;
