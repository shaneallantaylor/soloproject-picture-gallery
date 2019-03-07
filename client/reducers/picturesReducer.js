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
  newTitle: ""
};

const picturesReducer = (state = initialState, action) => {
  let pictureList;


  switch (action.type) {

    // case types.FETCH_PICTURES: {
    //   pictureList = {
    //     ...state.pictureList,
    //     loading: true
    //   }

    //   return {
    //     ...state,
    //     pictureList
    //   }
    // }

    case types.FETCH_PICTURES_SUCCESS: {
      const newPictures = [...action.payload];
      pictureList = {
        pictures: newPictures,
        loading: false,
        error: null
      }

      return {
        ...state,
        pictureList
      }
    }

    case types.FETCH_PICTURES_ERROR: {
      pictureList = {
        pictures: null,
        error: "There was an error",
        loading: false
      }
    }

    case types.ADD_PICTURE: {
      const newPicture = {
        title: state.newTitle,
        url: state.newUrl,
      }

      pictureList = { ...state.pictureList, ...newPicture };

      return {
        ...state,
        pictureList,
        newUrl: "",
        newTitle: ""
      }
    }

    case types.SET_NEW_TITLE: {
      return { ...state, newTitle: action.payload }
    }

    case types.SET_NEW_URL: {
      return { ...state, newUrl: action.payload }
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
        pictureList
      }
    }

    default:
      return state;
  }
};

export default picturesReducer;