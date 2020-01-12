import { useState, useEffect } from 'react';

const useGameplay = ({
  cards, setCards, setMoves, settings,
}) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const selectCard = index => {
    const selectedCard = cards.find(card => card.index === index);
    if (!isChecking && !selectedCard.matched) {
      if (!selectedCard.selected) {
        setSelectedCards(cards => {
          const newArr = cards[0] ? [...cards] : [];
          newArr.push(selectedCard);
          return newArr;
        });
      }
      setCards(cards => cards.map(card => {
        if (card.index === index) {
          return { ...card, selected: true };
        }
        return card;
      }));
    }
  };

  // Check if cards are the same
  const checkIfCardsEqual = selectedCards => selectedCards[0].name === selectedCards[1].name;
  const comparingCardsRoutine = isMatching => {
    setCards(cards => cards.map(card => {
      if (card.index === selectedCards[0].index || card.index === selectedCards[1].index) {
        return isMatching
          ? { ...card, selected: false, matched: true }
          : { ...card, selected: false };
      }
      return card;
    }));
    setMoves(moves => moves + 1);
    setIsChecking(false);
    setSelectedCards([]);
  };
  useEffect(() => {
    let timeoutID;
    if (selectedCards[1]) {
      setIsChecking(true);
      if (checkIfCardsEqual(selectedCards)) {
        comparingCardsRoutine(true);
      } else {
        timeoutID = setTimeout(() => {
          comparingCardsRoutine(false);
        }, settings.timeToMemorizeCards);
      }
    }
    return () => timeoutID && clearTimeout(timeoutID);
  }, [selectedCards]);

  return selectCard;
};

export default useGameplay;
