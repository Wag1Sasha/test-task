import photosReducer from '../redux/ducks/PhotosDucks';
import * as selectActions from '../redux/ducks/PhotosDucks';

it('should add a photo to store', () => {
  const photos = { largeImageURL: 'http://myimage.com/url.png' };
  const expectedAction = {
    type: 'PHOTOS/ADD_PHOTO_TO_STORE',
    payload: photos,
  };
  expect(photosReducer({ fetchedPhotos: [] }, expectedAction)).toEqual(
    photosReducer({ fetchedPhotos: [] }, selectActions.addPhotoToStore(photos)),
  );
});
