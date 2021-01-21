import { takeEvery, put, call } from 'redux-saga/effects';

export const REQUEST_PHOTOS_BY_VALUE = 'PHOTOS/REQUEST_PHOTOS_BY_VALUE';
export const ASYNC_FETCH_PHOTOS = 'PHOTOS/ASYNC_FETCH_PHOTOS';
export const ADD_PHOTO_TO_STORE = 'PHOTOS/ADD_PHOTO_TO_STORE';

const initialState = {
  fetchedPhotos: [],
};

const photosReducer = (state = initialState, action: ReturnType<typeof addPhotoToStore>) => {
  switch (action.type) {
    case ADD_PHOTO_TO_STORE:
      return {
        ...state,
        fetchedPhotos: action.payload,
      };
    default:
      return state;
  }
};

export const addPhotoToStore = (photos: IPropsHits) => ({
  type: ADD_PHOTO_TO_STORE,
  payload: photos,
});

export const asyncFetchPhotos = (url: string) => ({
  type: ASYNC_FETCH_PHOTOS,
  url,
});

export function* sagaWarcher() {
  yield takeEvery(ASYNC_FETCH_PHOTOS, sagaWorker);
}

function* sagaWorker(payload: ReturnType<typeof asyncFetchPhotos>) {
  const data = yield call(requestPhotos, payload.url);
  yield put(addPhotoToStore(data.hits));
}

const requestPhotos = async (url: string) => {
  const res = await fetch(`https://pixabay.com/api/?key=19776687-7c6cc257a41e8830f998f821c&q=${url}`);
  return await res.json();
};

export default photosReducer;
