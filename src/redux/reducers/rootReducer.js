import {combineReducers} from 'redux'
import {tagsReducer} from './tagsReducer'


export const rootReducer = combineReducers({
  tags:tagsReducer
})