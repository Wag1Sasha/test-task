import tagsReducer from './TagsDucks';
import photosReducer from './PhotosDucks';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  tags: tagsReducer,
  photos: photosReducer,
});

export default rootReducer;
