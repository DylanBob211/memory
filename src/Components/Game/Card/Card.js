import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { CardFront, CardBack } from './CardElements';

const Card = ({
  selected, matched, img, handleClick, index, cardsAmount
}) => (
  <ReactCardFlip isFlipped={selected || matched}>
    <CardBack
      cardsAmount={cardsAmount}
      onClick={() => handleClick(index)}
    />
    <CardFront
      cardsAmount={cardsAmount}
      background={img}
      matched={matched}
    />
  </ReactCardFlip>
);

export default Card;
