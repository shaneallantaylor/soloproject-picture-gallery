import * as types from "../constants/actionTypes";
// import { strictEqual } from "assert";
// import update from "immutability-helper";

const initialState = {
  pictureList: {},
  lastPictureId: 100,
  newTitle: ""
};

const picturesReducer = (state = initialState, action) => {
  let pictureList;


  switch (action.type) {
    case types.ADD_PICTURE: {
      const newLastPictureId = state.lastPictureId + 1;
      const newPicture = {
        pictureId: lastPictureId,
        title: state.newTitle,
      }

      pictureList = { ...state.pictureList, ...{ [newLastPictureId]: newPicture } };

      return {
        ...state,
        pictureList,
        lastPictureId: newLastPictureId,
        newTitle: ""
      }
    }

    case types.SET_NEW_TITLE: {
      return { ...state, newLocation: action.payload }
    }

    default:
      return state;
  }
};

export default picturesReducer;