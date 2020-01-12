import styled from 'styled-components';
import { GlobalWrapper, BackButton } from '../App/AppElements';

export const Cardboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
`;

export const GameWrapper = styled(GlobalWrapper)`
  justify-content: flex-start;
  align-items: center;
`;

export const GameBackButton = styled(BackButton)`
  position: absolute;
  top: 85%;
  left: 90%;
`;
