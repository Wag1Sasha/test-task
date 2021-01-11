import { ADD_PHOTO_TO_STORE } from "../types";

const initialState = {
  fetchedPhotos: []
};


export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTO_TO_STORE:
      return {
        ...state, fetchedPhotos: action.payload
      };
      default:
        return state;
  };
};