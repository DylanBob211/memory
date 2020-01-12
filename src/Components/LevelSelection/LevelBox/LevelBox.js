import React from 'react';
import { Box } from './LevelBoxElements';

const LevelBox = ({ level, handleClick }) => {
  return (
    <Box onClick={() => handleClick(level.level - 1)}>
      {level.level}
    </Box>
  );
};

export default LevelBox;
