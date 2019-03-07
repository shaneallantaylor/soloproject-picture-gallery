/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description Stateful component for our main display section
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import styles from '../scss/mainContainer.scss';
import PictureSaver from "../components/PictureSaver.jsx";
import PictureDelete from "../components/PictureDelete.jsx";
import PictureUpdate from "../components/PictureUpdate.jsx";
import PicturesDisplay from "../components/PicturesDisplay.jsx";
import * as actions from '../actions/actions';

const mapStateToProps = ({ pictures }) => {
  return {
    // add pertinent state here
    pictureList: pictures.pictureList,
    newUrl: pictures.newUrl,
    newTitle: pictures.newTitle,
    newTarget: pictures.newTarget,
    updatedTitle: pictures.updatedTitle
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MainContainer = props => (
  <div className="container add-picture">
    <div className="header">
      <h1>Probably a NAV BAR at some point</h1>
    </div>
    <PictureSaver
      newTitle={props.newTitle}
      newUrl={props.newUrl}
      setNewTitle={props.setNewTitle}
      setNewUrl={props.setNewUrl}
      uploadPicture={props.uploadPicture}
    />
    <PictureDelete setNewTarget={props.setNewTarget} deletePicture={props.deletePicture} newTarget={props.newTarget} />
    <PictureUpdate setNewTarget={props.setNewTarget} updatePicture={props.updatePicture} newTarget={props.newTarget} setUpdatedTitle={props.setUpdatedTitle} updatedTitle={props.updatedTitle} />
    <PicturesDisplay
      pictureList={props.pictureList}
      loadPictures={props.loadPictures}
    />
  </div >
)




export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);