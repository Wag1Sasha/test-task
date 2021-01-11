import { EVENT_SUBMIT,DELETE_TAG, ADD_PHOTO_TO_STORE, ASYNC_FETCH_PHOTOS } from './types';

export const eventSubmit = (tags) => ({
    type: EVENT_SUBMIT,
    payload: {
      tags: Object.values(tags).filter(word => word.length > 0)
    }
});

export const deleteTag = (i) =>({
    type:DELETE_TAG,
    payload:i
});


export const addPhotoToStore = (photos) => ({
    type: ADD_PHOTO_TO_STORE,
    payload: photos,
});


export const asyncFetchPhotos = (url) => ({
  type: ASYNC_FETCH_PHOTOS,
  url
});