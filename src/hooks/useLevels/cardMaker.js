import requestImages from './requestImages';

const localStorageKey = 'cards';

const populateStorage = arrayOfUrls => {
  const urlsObject = {
    cards: [...arrayOfUrls],
  };
  localStorage.setItem(localStorageKey, JSON.stringify(urlsObject));
};

const cardFactory = (name, img) => ({
  name,
  img,
});

export default async arrayOfNames => {
  let cards = localStorage.getItem(localStorageKey);

  if (cards === null) {
    const objectsToQuery = [...arrayOfNames];
    const newCards = [];
    const imgs = await requestImages(objectsToQuery);
    imgs.forEach((img, index) => {
      newCards.push(cardFactory(objectsToQuery[index], img));
    });
    populateStorage(newCards);
    cards = newCards;
  } else {
    cards = JSON.parse(cards).cards;
  }

  return cards;
};
