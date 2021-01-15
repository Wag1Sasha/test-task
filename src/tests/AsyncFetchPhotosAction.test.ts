import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/actions';


describe('Fetch Photos Action', () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  const url = 'http://image.com/api/photos';
    it('Action-creator works right', () => {
      const expectedActions = [
        {
          'type': "ASYNC_FETCH_PHOTOS",
          'url': 'http://image.com/api/photos',
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