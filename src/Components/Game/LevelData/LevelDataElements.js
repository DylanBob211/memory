import styled from 'styled-components';
import { GlobalTextElement } from '../../App/AppElements';

export const Bar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 1rem;
  padding: 0;
  width: 100vw;
  background: #000;
  color: #fdfdfd;
`;

export const LevelName = styled(GlobalTextElement)`
  font-size: 3rem;
`;

export const LevelElement = styled(GlobalTextElement)`
  font-size: 1.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
