import { combineReducers } from 'redux';
import { photosReducer } from './photosReducer';
import { tagsReducer } from './tagsReducer';

export const rootReducer = combineReducers({
  tags: tagsReducer,
  photos: photosReducer,
});
