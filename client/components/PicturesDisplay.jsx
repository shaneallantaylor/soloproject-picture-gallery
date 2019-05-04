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
import styles from '../scss/picturesDisplay.scss';




const PicturesDisplay = props => {
  const picItems = [];
  if (props.pictureList.pictures.length > 0) {
    for (let i = 0; i < props.pictureList.pictures.length; i += 1) {
      picItems.push(<PictureDisplay key={i} picTitle={props.pictureList.pictures[i].title} picUrl={props.pictureList.pictures[i].url} />)
    }
  }

  return (
    <div>
      <ul className="pictures-list">
        {picItems}
      </ul>
    </div>
  )
}

export default PicturesDisplay;