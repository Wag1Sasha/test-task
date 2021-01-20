import { EVENT_SUBMIT, DELETE_TAG, ADD_PHOTO_TO_STORE, ASYNC_FETCH_PHOTOS, DRAG_N_DROP } from './types';

export const eventSubmit = (tags: TagPropsType) => ({
  type: EVENT_SUBMIT,
  payload: tags,
});

export const dragNDrop = (tags: TagPropsType[]) => ({
  type: DRAG_N_DROP,
  payload: tags,
});

export const deleteTag = (index: number): TagsActionTypes => ({
  type: DELETE_TAG,
  payload: index,
});

export const addPhotoToStore = (photos: IPropsHits) => ({
  type: ADD_PHOTO_TO_STORE,
  payload: photos,
});

export const asyncFetchPhotos = (url: string) => ({
  type: ASYNC_FETCH_PHOTOS,
  url,
});
