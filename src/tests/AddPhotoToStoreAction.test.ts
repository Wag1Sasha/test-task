

import configureStore from 'redux-mock-store';
import * as selectActions from '../redux/actions';


describe('Add Photo To Store Action', () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });
  const photos = {largeImageURL:'http://image.com/image.png'};
    it('Action-creator works correct', () => {
      const expectedActions = [
        {
          'type': "PHOTOS/ADD_PHOTO_TO_STORE",
          'payload': {largeImageURL:'http://image.com/image.png'},
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