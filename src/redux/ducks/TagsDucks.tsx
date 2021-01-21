export const EVENT_SUBMIT = 'TAGS/EVENT_SUBMIT';
export const DELETE_TAG = 'TAGS/DELETE_TAG';
export const DRAG_N_DROP = 'TAGS/DRAG_N_DROP';

const initialState: StateTagsType = {
  tags: [],
};

const tagsReducer = (state = initialState, action: TagsActionTypes) => {
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

export default tagsReducer;
