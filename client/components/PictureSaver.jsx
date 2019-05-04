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
import styles from '../scss/Drawer.scss';


const PictureSaver = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div className={props.showAddFlag ? 'drawer on' : 'drawer'}>
    <h3>Gimmie the details</h3>
    <div className="inputs">
      <div className="input-container">
        <label>give it a title</label>
        <input
          type="text"
          id="newTitle"
          onChange={e => props.setNewTitle(e.target.value)}
          value={props.newTitle}
        />
      </div>
      <div className="input-container">
        <label>and a url</label>
        <input
          type="text"
          id="newUrl"
          onChange={e => props.setNewUrl(e.target.value)}
          value={props.newUrl}
        />
      </div>
    </div>
    <button id="addPicture" onClick={props.uploadPicture}>
      Save that picture to the database!
    </button>
  </div>
);

export default PictureSaver;