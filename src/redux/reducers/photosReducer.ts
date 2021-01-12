import { ADD_PHOTO_TO_STORE } from "../types";
import {addPhotoToStore} from '../actions';

const initialState = {
  fetchedPhotos: []
};


export const photosReducer = (state = initialState, action:ReturnType<typeof addPhotoToStore>) => {
  switch (action.type) {
    case ADD_PHOTO_TO_STORE:
      return {
        ...state, fetchedPhotos: action.payload
      };
      default:
        return state;
  };
};