import styled from 'styled-components';
import { GlobalWrapper, BackButton } from '../App/AppElements';

export const LevelsContainer = styled.div`
  width: 50vh;
  display: flex;
  flex-wrap: wrap;
`;

export const LevelSelectionWrapper = styled(GlobalWrapper)`
  justify-content: center;
  align-items: center;
`;

export const LevelSelectionBackButton = styled(BackButton)`
  position: absolute;
  top: 80%;
`;
