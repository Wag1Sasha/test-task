import { ADD_TAG, DELETE_LAST_TAG } from "../types";

const initialState = {
  lastTags:[]
}


export const tagsReducer = (state=initialState,action)=>{
  switch (action.type) {
    case ADD_TAG:
      return {...state , lastTags: state.lastTags.concat(action.payload)}
    case DELETE_LAST_TAG:
      return {lastTags:state.lastTags.slice(-1)}
    default:
         return state;
  }
  
}