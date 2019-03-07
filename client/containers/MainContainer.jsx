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
import PicturesDisplay from "../components/PicturesDisplay.jsx";
import * as actions from '../actions/actions';

const mapStateToProps = ({ pictures }) => {
  return {
    // add pertinent state here
    pictureList: pictures.pictureList,
    newUrl: pictures.newUrl,
    newTitle: pictures.newTitle
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MainContainer = props => (
  <div className="container add-picture">
    <h1>Probably a NAV BAR at some point</h1>
    <PictureSaver
      newTitle={props.newTitle}
      newUrl={props.newUrl}
      setNewTitle={props.setNewTitle}
      setNewUrl={props.setNewUrl}
    />
    <PicturesDisplay
      pictureList={props.pictureList}
      loadPictures={props.loadPictures}
    />
  </div >
)




export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);