import React from 'react';
import {
  Bar, LevelElement, LevelName, Wrapper,
} from './LevelDataElements';


const LevelData = ({
  level, cardsAmount, moves, timer, timeLimit, moveLimit,
}) => (
  <Bar>
    <LevelElement>
      Time:
      {' '}
      {timer}
    </LevelElement>
    <LevelElement>
      Moves:
      {' '}
      {moves}
    </LevelElement>
    <Wrapper>
      <LevelName>
        Level
        {' '}
        {level}
      </LevelName>
      <LevelElement>
        number of cards:
        {' '}
        {cardsAmount}
      </LevelElement>
    </Wrapper>
    <LevelElement>
      Time Limit:
      {' '}
      {timeLimit || '--:--'}
    </LevelElement>
    <LevelElement>
      Moves Limit:
      {' '}
      {moveLimit || '-'}
    </LevelElement>
  </Bar>
);

export default LevelData;
