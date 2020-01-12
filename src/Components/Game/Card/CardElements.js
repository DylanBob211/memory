import styled from 'styled-components';

const getCardPadding = cardsAmount => {
  if (cardsAmount > 30) return '4rem 2rem';
  return '6rem 3rem';
};

const Card = styled.div`
  /* TODO: Make a theme*/
  border: solid #fff .5rem; 
  border-radius: .2em;
  color: #fff;
  margin: ${({ cardsAmount }) => (cardsAmount > 40 ? '.5rem' : '1rem')};
  padding: ${({ cardsAmount }) => getCardPadding(cardsAmount)};
  box-shadow: -7px 6px 5px -4px rgba(0,0,0,0.75);
`;

export const CardFront = styled(Card)`
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: cover;
  opacity: ${props => (props.matched && '0.3')};
  transition: opacity .5s linear 1s;
  
`;

export const CardBack = styled(Card)`
  background: #000;
  transition: outline .2s ease-in-out;
  &:hover {
    outline: ${props => (!props.matched && !props.selected) && 'solid blue 3px'}
  }
`;
