import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: process.env.REACT_APP_UNSPLASH_API_KEY });

export const requestSureImgResultFactory = unsplash => {
  let counter = 0;
  return async () => {
    const result = await unsplash.search.photos('dog');
    const img = await result.json();
    counter++;
    return img.results[counter];
  };
};

const requestImages = unsplash => async objectsToQuery => {
  try {
    const promises = [];
    objectsToQuery.forEach(object => {
      promises.push(unsplash.search.photos(object));
    });

    const responses = await Promise.all(promises);
    const values = [];

    responses.forEach(async el => {
      values.push(el.json());
    });

    const valuesToRead = await Promise.all(values);

    const sureImgRequests = [];
    const requestSureImgResult = requestSureImgResultFactory(unsplash);

    valuesToRead.forEach(value => {
      if (!value.results[0]) {
        sureImgRequests.push(requestSureImgResult());
      }
    });

    const sureResults = await Promise.all(sureImgRequests);
    let sureResultsIndex = 0;

    const imgs = valuesToRead
      .map(el => {
        if (!el.results[0]) {
          el = sureResults[sureResultsIndex];
          sureResultsIndex++;
          return el;
        }
        return el.results[0];
      })
      .map(el => el.urls.small);

    return imgs;
  } catch (e) {
    console.error(e.message);
    throw new Error('Something went wrong... It might be because of your internet connection');
  }
};


export default requestImages(unsplash);
