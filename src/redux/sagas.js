import { takeEvery, put, call } from 'redux-saga/effects';
import { ASYNC_FETCH_PHOTOS} from './types';
import {addPhotoToStore} from './actions';

export function* sagaWarcher() {
  yield takeEvery(ASYNC_FETCH_PHOTOS, sagaWorker)
};

function* sagaWorker({url}) {
  const payload = yield call(requestPhotos,url)
  yield put(addPhotoToStore(payload.hits))
};


const requestPhotos =async(u)=>{
  const res = await fetch(`https://pixabay.com/api/?key=19776687-7c6cc257a41e8830f998f821c&q=${u}`)
  const data = await res.json();
  return data;
};