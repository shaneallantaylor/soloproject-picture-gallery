/**
 * ************************************
 *
 * @module  PictureDisplay
 * @author
 * @date
 * @description presentation component for rendering each picture
 *
 * ************************************
 */

import React from "react";
import styles from '../scss/pictureDisplay.scss';


const PictureDisplay = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <li className="picture-item">
    <img src={props.picUrl} />
    <h6>{props.picTitle}</h6>
  </li>
);

export default PictureDisplay;