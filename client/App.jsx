/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */


import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import styles from './scss/application.scss';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer />
    );
  }
};

export default App;