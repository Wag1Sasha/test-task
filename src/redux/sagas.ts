import { takeEvery, put, call } from 'redux-saga/effects';
import { ASYNC_FETCH_PHOTOS } from './types';
import { addPhotoToStore, asyncFetchPhotos } from './actions';

export function* sagaWarcher() {
  yield takeEvery(ASYNC_FETCH_PHOTOS, sagaWorker);
}

function* sagaWorker(payload: ReturnType<typeof asyncFetchPhotos>) {
  const data = yield call(requestPhotos, payload.url);
  yield put(addPhotoToStore(data.hits));
}

const requestPhotos = async (u: string) => {
  const res = await fetch(`https://pixabay.com/api/?key=19776687-7c6cc257a41e8830f998f821c&q=${u}`);
  return await res.json();
};
