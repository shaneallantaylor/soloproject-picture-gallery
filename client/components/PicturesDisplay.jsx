/**
 * ************************************
 *
 * @module  PicturesDisplay
 * @author
 * @date
 * @description presentation component for viewing the pictures
 *
 * ************************************
 */

import React, { Component } from "react";
import PictureDisplay from "./PictureDisplay.jsx"




const PicturesDisplay = props => {
  const picItems = [];
  if (props.pictureList.pictures.length > 0) {
    for (let i = 0; i < props.pictureList.pictures.length; i += 1) {
      picItems.push(<PictureDisplay key={i} picUrl={props.pictureList.pictures[i].url} />)
    }
  }

  return (
    <div>
      <button id="show-pictures" onClick={props.loadPictures}>
        Show me the pictures!
    </button>
      <div className="container">
        <ul className="pictures-list">
          {picItems}
        </ul>
      </div>
    </div>
  )
}

export default PicturesDisplay;