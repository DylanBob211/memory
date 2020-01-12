import styled from 'styled-components';
import { GlobalButton, GlobalWrapper } from '../App/AppElements';

export const LandingTitle = styled.h1`
  font-size: 10rem;
  display: flex;
  margin: 2rem 0 0 0;
  border: .1em solid #000;
  width: 90vw;
  justify-content: space-evenly;
`;

export const MenuButton = styled(GlobalButton)` 
  font-size: 5rem;
  padding: 1rem 5rem;
  margin-top: 2rem;
  width: 90vw;
`;

export const LandingWrapper = styled(GlobalWrapper)`
  justify-content: center;
  align-items: center;
`;
