/**
 * ************************************
 *
 * @module  PictureUpdate
 * @author
 * @date
 * @description presentation component for adding a new picture to the picture list
 *
 * ************************************
 */

import React from "react";


const PictureUpdate = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <h3>Update a picture title (by name)</h3>
    <input
      type="text"
      id="newTarget"
      onChange={e => props.setNewTarget(e.target.value)}
      value={props.newTarget}
    />
    <input
      type="text"
      id="updatedTitle"
      onChange={e => props.setUpdatedTitle(e.target.value)}
      value={props.updatedTitle}
    />
    <button id="deletePicture" onClick={props.updatePicture}>
      Give it a New Name
    </button>
  </div>
);

export default PictureUpdate;