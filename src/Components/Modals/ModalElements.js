import styled from 'styled-components';
import { GlobalButton } from '../App/AppElements';

export const ModalBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fffc;
  border: .3em solid #000;

  &::before{
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 1000vw;
    height: 1000vh;
    background: #0003;
    z-index: -1;
  }
`;

export const MainMessage = styled.h2`
  display: block;
  margin-top: 4rem;
  padding: 0;
  font-size: 5rem;
`;

export const ModalButton = styled(GlobalButton)`
  width: 70%;
  font-size: 3rem;
  margin: 1rem auto 3rem auto;
`;
