/**
 * ************************************
 *
 * @module  PictureDelete
 * @author
 * @date
 * @description presentation component for adding a new picture to the picture list
 *
 * ************************************
 */

import React from "react";


const PictureDelete = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <h3>Delete a picture (by name)</h3>
    <input
      type="text"
      id="newTarget"
      onChange={e => props.setNewTarget(e.target.value)}
      value={props.newTarget}
    />
    <button id="deletePicture" onClick={props.deletePicture}>
      Delete
    </button>
  </div>
);

export default PictureDelete;