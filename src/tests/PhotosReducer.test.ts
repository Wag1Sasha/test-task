import { photosReducer } from '../redux/reducers/photosReducer';
import * as types from '../redux/types';
import { addPhotoToStore } from '../redux/actions';

describe('photos reducer is work correct', () => {
  it('should add a photo to store', () => {
    const photos = { largeImageURL: 'http://myimage.com/url.png' };
    const expectedAction = {
      type: types.ADD_PHOTO_TO_STORE,
      payload: { largeImageURL: 'http://myimage.com/url.png' },
    };
    expect(photosReducer({ fetchedPhotos: [] }, expectedAction)).toEqual(
      photosReducer({ fetchedPhotos: [] }, addPhotoToStore(photos)),
    );
  });
});
