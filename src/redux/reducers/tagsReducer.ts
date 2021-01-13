import { EVENT_SUBMIT, DELETE_TAG } from "../types";

const initialState = {
  lastTags: []
};



export const tagsReducer = (state = initialState, action: TagsActionTypes): StateTagsType=> {
  switch (action.type) {
    case EVENT_SUBMIT: {
      const tagsLen = action.payload.tags.length;
      return {
        ...state, lastTags:[...state.lastTags.filter((_,index,arr)=>arr.length<3?index>=tagsLen-1 : index>tagsLen-1), ...action.payload.tags  ]
      }
    }
    case DELETE_TAG: {
      return {
        ...state, lastTags:[...state.lastTags.filter((_,i)=>i !== action.payload)]
      }
    }
        default:
          return state;
  };
};