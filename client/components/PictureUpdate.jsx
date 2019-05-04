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
import styles from '../scss/Drawer.scss';


const PictureUpdate = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div className={props.showUpdateFlag ? 'drawer on' : 'drawer'}>
    <h3>Update a picture title (by name)</h3>
    <div className="inputs">
      <div className="input-container">
        <label>which pic</label>
        <input
          type="text"
          id="newTarget"
          onChange={e => props.setNewTarget(e.target.value)}
          value={props.newTarget}
        />
      </div>
      <div className="input-container">
        <label>new name</label>
        <input
          type="text"
          id="updatedTitle"
          onChange={e => props.setUpdatedTitle(e.target.value)}
          value={props.updatedTitle}
        /></div></div>
    <button id="deletePicture" onClick={props.updatePicture}>
      Give it a New Name
    </button>
  </div>
);

export default PictureUpdate;