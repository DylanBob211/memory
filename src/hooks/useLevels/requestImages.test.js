import { requestSureImgResultFactory } from './requestImages';

const mockSearch = jest.fn(async () => ({
  results: ['result1', 'result2', 'result3', 'result4', 'result5', 'result6'],
}));
const mockSplash = {
  search: {
    photos: mockSearch,
  },
};

it('calls the unsplash api', () => {
  const requestSureImgResult = requestSureImgResultFactory(mockSplash);
  for (let i = 0; i < 4; i++) {
    requestSureImgResult();
  }
  expect(mockSearch).toHaveBeenCalledTimes(4);
});

it('returns each time a different result', () => {
  const requestSureImgResult = requestSureImgResultFactory(mockSplash);
  for (let i = 0; i < 2; i++) {
    requestSureImgResult();
  }
  return requestSureImgResult().then(value => expect(value).toEqual('result4'))
});
