import { requestSureImgResultFactory, requestImagesFactory } from './requestImages';

const abstractWordQuery = 'abstract word query';


const emptyResult = JSON.stringify(
  { results: [] },
);
const goodResults = JSON.stringify(
  {
    results: [
      { urls: { small: 'result1' } },
      { urls: { small: 'result2' } },
      { urls: { small: 'result3' } },
      { urls: { small: 'result4' } },
      { urls: { small: 'result5' } },
      { urls: { small: 'result6' } },
    ],
  },
);
const sureResults = JSON.stringify(
  {
    results: [
      { urls: { small: 'dog1' } },
      { urls: { small: 'dog2' } },
      { urls: { small: 'dog3' } },
      { urls: { small: 'dog4' } },
      { urls: { small: 'dog5' } },
      { urls: { small: 'dog6' } },
    ],
  },
);

const mockSearch = jest.fn(async query => {
  if (query === abstractWordQuery) return new Response(emptyResult);
  if (query === 'dog') return new Response(sureResults);
  return new Response(goodResults);
});

const mockSplash = {
  search: {
    photos: mockSearch,
  },
};

describe('requestSureImgResult', () => {
  let requestSureImgResult;
  beforeEach(() => {
    requestSureImgResult = requestSureImgResultFactory(mockSplash);
  });

  it('calls the unsplash api', () => {

    for (let i = 0; i < 4; i++) {
      requestSureImgResult().catch(() => {});
    }
    expect(mockSearch).toHaveBeenCalledTimes(4);
  });

  it('returns each time a different result skipping the first element of the array', () => {
    requestSureImgResult().then(value => expect(value.urls.small).toEqual('dog2'));
    return requestSureImgResult().then(value => expect(value.urls.small).toEqual('dog3'));
  });
});

describe('requestImages', () => {
  let requestImages;
  beforeEach(() => {
    requestImages = requestImagesFactory(mockSplash);
    jest.clearAllMocks();
  });

  test('happy path', () => {
    return requestImages(['random'])
      .then(value => expect(value).toEqual(['result1']));
  });

  test('happy path2', () => {
    return requestImages(['random', 'words'])
      .then(value => expect(value).toEqual(['result1', 'result1']));
  });

  it('calls the unsplash api', () => {
    requestImages(['some words']).catch(() => {});
    expect(mockSearch).toHaveBeenCalledWith('some words');
  });

  it('returns a dog img if the query does not give results', () => {
    return requestImages([abstractWordQuery]).then(value => expect(value).toEqual(['dog2']));
  });

  it('returns a dog img each time the query does not give results', () => {
    return requestImages([abstractWordQuery, 'good query1', abstractWordQuery, 'good query2'])
      .then(value => expect(value).toEqual(['dog2', 'result1', 'dog3', 'result1']))
  });
});
