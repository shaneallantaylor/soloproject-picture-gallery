import * as types from "../constants/actionTypes";

export const addPicture = () => {
  return {
    type: types.ADD_PICTURE,
  };
};

export const setNewTitle = value => {
  return {
    type: types.SET_NEW_TITLE,
    payload: value
  }
}