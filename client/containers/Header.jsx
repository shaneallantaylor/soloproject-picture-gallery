/**
 * ************************************
 *
 * @module  Header
 * @author
 * @date
 * @description presentation component for adding a new picture to the picture list
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import PictureSaver from "../components/PictureSaver.jsx";
import PictureDelete from "../components/PictureDelete.jsx";
import PictureUpdate from "../components/PictureUpdate.jsx";
import styles from '../scss/Header.scss';

const mapStateToProps = ({ pictures }) => {
  return {
    // add pertinent state here
    pictureList: pictures.pictureList,
    newUrl: pictures.newUrl,
    newTitle: pictures.newTitle,
    newTarget: pictures.newTarget,
    updatedTitle: pictures.updatedTitle,
    showAddFlag: pictures.showAddFlag,
    showUpdateFlag: pictures.showUpdateFlag,
    showDeleteFlag: pictures.showDeleteFlag,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Header = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div className="top-container">
    <header>
      <h1>A very serious problem</h1>
      <ul>
        <li><button id="showAddDrawer" onClick={props.showAdd}>Add</button></li>
        <li><button id="showUpdateDrawer" onClick={props.showUpdate}>Update</button></li>
        <li><button id="showDeleteDrawer" onClick={props.showDelete}>Delete</button></li>
        <li className="full"><button className="full" id="showPics" onClick={props.loadPictures} >Show Me</button></li>
      </ul>
    </header>
    <div className="drawers">
      <PictureSaver
        newTitle={props.newTitle}
        newUrl={props.newUrl}
        setNewTitle={props.setNewTitle}
        setNewUrl={props.setNewUrl}
        uploadPicture={props.uploadPicture}
        showAddFlag={props.showAddFlag}
      />
      <PictureDelete
        setNewTarget={props.setNewTarget}
        deletePicture={props.deletePicture}
        newTarget={props.newTarget}
        showDeleteFlag={props.showDeleteFlag}
      />
      <PictureUpdate
        setNewTarget={props.setNewTarget}
        updatePicture={props.updatePicture}
        newTarget={props.newTarget}
        setUpdatedTitle={props.setUpdatedTitle}
        updatedTitle={props.updatedTitle}
        showUpdateFlag={props.showUpdateFlag}
      />
    </div>
  </div >
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);