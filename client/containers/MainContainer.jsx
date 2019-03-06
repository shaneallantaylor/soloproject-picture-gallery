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

const mapStateToProps = store => {
  return {
    // add pertinent state here
    pictureList: store.pictures.pictureList
  };
};

const mapDispatchToProps = dispatch => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="outerbox">
          <h1>Picture OMG</h1>
        </div>
      </div >
    )
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);