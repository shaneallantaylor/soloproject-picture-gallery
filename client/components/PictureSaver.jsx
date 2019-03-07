/**
 * ************************************
 *
 * @module  PictureSaver
 * @author
 * @date
 * @description presentation component for adding a new picture to the picture list
 *
 * ************************************
 */

import React from "react";


const PictureSaver = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <h3>Add a picture:</h3>
    <input
      type="text"
      id="newTitle"
      onChange={e => props.setNewTitle(e.target.value)}
      value={props.newTitle}
    />
    <input
      type="text"
      id="newUrl"
      onChange={e => props.setNewUrl(e.target.value)}
      value={props.newUrl}
    />
    <button id="addPicture" onClick={props.addPicture}>
      Save that picture to the database!
    </button>
  </div>
);

export default PictureSaver;