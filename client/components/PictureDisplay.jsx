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


const PictureDisplay = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <li className="picture-item">
    <img src={props.picUrl} />
  </li>
);

export default PictureDisplay;