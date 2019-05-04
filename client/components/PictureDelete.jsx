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
import styles from '../scss/Drawer.scss';


const PictureDelete = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div className={props.showDeleteFlag ? 'drawer on' : 'drawer'}>
    <h3>Delete a picture (by name)</h3>
    <div className="inputs">
      <div className="input-container">
        <label>name please</label>
        <input
          type="text"
          id="newTarget"
          onChange={e => props.setNewTarget(e.target.value)}
          value={props.newTarget}
        />
      </div>
    </div>
    <button id="deletePicture" onClick={props.deletePicture}>
      Delete
    </button>
  </div>
);

export default PictureDelete;