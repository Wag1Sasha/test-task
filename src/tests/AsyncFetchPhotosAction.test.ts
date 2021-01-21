import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/ducks/PhotosDucks';

describe('Fetch Photos Action', () => {
  const mockStore = configureStore();
  const store = mockStore();
  const url = 'http://image.com/api/photos';

  beforeEach(() => {
    store.clearActions();
  });

  it('Action-creator works right', () => {
    const expectedActions = [
      {
        type: 'PHOTOS/ASYNC_FETCH_PHOTOS',
        url,
      },
    ];
    store.dispatch(selectActions.asyncFetchPhotos(url));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Action-creator render', () => {
    store.dispatch(selectActions.asyncFetchPhotos(url));
    expect(store.getActions()).toMatchSnapshot();
  });
});
