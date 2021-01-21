import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/ducks/PhotosDucks';

describe('Add Photo To Store Action', () => {
  const mockStore = configureStore();
  const store = mockStore();
  const photos = { largeImageURL: 'http://image.com/image.png' };

  beforeEach(() => {
    store.clearActions();
  });

  it('Action-creator works correct', () => {
    const expectedActions = [
      {
        type: 'PHOTOS/ADD_PHOTO_TO_STORE',
        payload: photos,
      },
    ];
    store.dispatch(selectActions.addPhotoToStore(photos));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Render action-creator', () => {
    store.dispatch(selectActions.addPhotoToStore(photos));
    expect(store.getActions()).toMatchSnapshot();
  });
});
