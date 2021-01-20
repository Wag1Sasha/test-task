import { DRAG_N_DROP } from './../types';
import { EVENT_SUBMIT, DELETE_TAG } from '../types';

const initialState: StateTagsType = {
  tags: [
    { id: 'text', text: 'text' },
    { id: 'type', text: 'type' },
  ],
};

export const tagsReducer = (state = initialState, action: TagsActionTypes) => {
  switch (action.type) {
    case EVENT_SUBMIT: {
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    }
    case DELETE_TAG: {
      return {
        ...state,
        tags: [...state.tags.filter((_, i) => i !== action.payload)],
      };
    }
    case DRAG_N_DROP: {
      return {
        ...state,
        tags: [...action.payload],
      };
    }
    default:
      return state;
  }
};
