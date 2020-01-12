import styled, { createGlobalStyle } from 'styled-components';
import BackIcon from '../Icons/BackIcon';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Cute Font', cursive;
  }
`;

export const GlobalButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  font-family: inherit;
  background: none;
  border: .15em solid;
  border-color: #000;
  transition-duration: .2s;
  transition-property: color, border;
  &:hover {
    color: white;
    border-color: #fff;
  }
`;

export const GlobalTextElement = styled.p`
  margin: 0;
  padding: 0;
`;

export const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #aabecf;
`;

export const BackButton = styled(BackIcon)`
  cursor: pointer;
  padding: 2rem;
  background: none;
  border: 5px solid;
  border-color: #000;
  transition-duration: .2s;
  transition-property: fill, border;
  &:hover {
    border-color: #fff;
    fill: #fff;
  }
`;
