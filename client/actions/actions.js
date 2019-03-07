/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from "../constants/actionTypes";

// export const addPicture = event => (dispatch, getState) => {
//   event.preventDefault();
//   const pictureData = [];
//   pictureData.push(getState().pictures.newTitle);
//   pictureData.push(getState().pictures.newUrl);
//   fetch('/addPic', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(pictureData)
//   })
//     .then(response => response.json());
// };

export const setNewTitle = value => {
  return {
    type: types.SET_NEW_TITLE,
    payload: value
  }
};

export const setNewUrl = value => {
  return {
    type: types.SET_NEW_URL,
    payload: value
  }
};

export const fetchPicturesSuccess = value => {
  return {
    type: types.FETCH_PICTURES_SUCCESS,
    payload: value
  }
}


export const fetchPictures = () => (dispatch) => {

};

export const loadPictures = () => (dispatch) => {
  return fetch('/show', {
    method: "GET",
  })
    .then(res => {
      return res.json();
    })
    .then(picturesJson => {
      dispatch({
        type: types.LOAD_PICTURES,
        payload: picturesJson
      });
    })
    .catch(console.error);
};