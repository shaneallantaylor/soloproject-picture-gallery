import * as types from "../constants/actionTypes";
// import { strictEqual } from "assert";
// import update from "immutability-helper";

const initialState = {
  pictureList: {
    pictures: [], // array of objects
    error: null,
    loading: false
  },
  newUrl: "",
  newTitle: "",
  newTarget: "",
  updatedTitle: "",
  showAddFlag: false,
  showUpdateFlag: false,
  showDeleteFlag: false
};

const picturesReducer = (state = initialState, action) => {
  let pictureList = {
    pictures: [],
    error: null,
    loading: false
  };


  switch (action.type) {

    case types.SET_NEW_TITLE: {
      return { ...state, newTitle: action.payload }
    }

    case types.SET_NEW_URL: {
      return { ...state, newUrl: action.payload }
    }

    case types.SET_NEW_TARGET: {
      return { ...state, newTarget: action.payload }
    }

    case types.SET_UPDATED_TITLE: {
      return { ...state, updatedTitle: action.payload }
    }

    case types.SHOW_ADD: {
      return {
        ...state,
        pictureList,
        showAddFlag: true,
        showUpdateFlag: false,
        showDeleteFlag: false
      }
    }

    case types.SHOW_UPDATE: {
      return {
        ...state,
        pictureList,
        showAddFlag: false,
        showUpdateFlag: true,
        showDeleteFlag: false
      }
    }


    case types.SHOW_DELETE: {
      return {
        ...state,
        pictureList,
        showAddFlag: false,
        showUpdateFlag: false,
        showDeleteFlag: true
      }
    }

    case types.HIDE_DRAWERS: {
      return {
        ...state,
        showAddFlag: false,
        showUpdateFlag: false,
        showDeleteFlag: false
      }
    }




    case types.LOAD_PICTURES: {
      const newPictures = [...action.payload];
      pictureList = {
        pictures: newPictures,
        loading: false,
        error: null
      }
      return {
        ...state,
        pictureList,
        showAddFlag: false,
        showUpdateFlag: false,
        showDeleteFlag: false
      }
    }

    case types.CLEAR_TEXT: {
      return {
        ...state,
        newUrl: "",
        newTitle: "",
        newTarget: "",
        updatedTitle: "",
        showAddFlag: false,
        showUpdateFlag: false,
        showDeleteFlag: false

      }
    }

    default:
      return state;
  }
};

export default picturesReducer;