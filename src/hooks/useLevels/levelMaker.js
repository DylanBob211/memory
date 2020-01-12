import randomWords from 'random-words';
import cardMaker from './cardMaker';

export default async (levelsAmount, cardAmountCoefficient) => {
  const levelsArray = [];
  const levelsData = (function getLevelsData() {
    let level;
    let cardsCounter = 4;
    let cardsAmountIncreasingPerLevel = 2;
    let cardCoefficientInterval = -1;

    for (level = 1; level <= levelsAmount; level++) {
      cardsCounter += cardsAmountIncreasingPerLevel;
      cardCoefficientInterval++;
      if (cardCoefficientInterval === cardAmountCoefficient) {
        cardsAmountIncreasingPerLevel += 2;
        cardCoefficientInterval = 0;
      }
      levelsArray.push({
        level,
        cardsAmount: cardsCounter,
        cards: [],
        done: false,
      });
    }
    return {
      cardsCounter, // total amount of cards
      levelsArray, // array of levels without cards
    };
  }());
    // makes all the cards for all the levels
  const cards = await cardMaker(randomWords(levelsData.cardsCounter / 2));
  // each level gets a piece of the same deck increasing by the coefficient chosen
  const levels = levelsArray.map(level => (
    { ...level, cards: cards.slice(0, level.cardsAmount / 2) }
  ));
  return levels;
};
