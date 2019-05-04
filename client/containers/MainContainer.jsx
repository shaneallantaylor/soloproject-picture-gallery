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
// import styles from '../scss/mainContainer.scss';
import Header from "./Header.jsx";
import PicturesDisplay from "../components/PicturesDisplay.jsx";
import * as actions from '../actions/actions';

const mapStateToProps = ({ pictures }) => {
  return {
    // add pertinent state here
    pictureList: pictures.pictureList,
  };
};

const MainContainer = props => (
  <div className="content">
    <Header />
    <PicturesDisplay
      pictureList={props.pictureList}
    />
  </div>
)




export default connect(mapStateToProps)(MainContainer);