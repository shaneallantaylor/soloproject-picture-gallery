import React, { Component } from "react";
import { connect } from "react-redux";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  const mapStateToProps = store => {
    return {
      // add pertinent state here
      totalCards: store.markets.totalCards,
      totalMarkets: store.markets.totalMarkets
    };
  };

  const mapDispatchToProps = dispatch => ({});

  render() {
    return {
      < div className = "container" >
      <div className="outerbox">
        <h1>Picture List</h1>
      </div>
      </div >
    }
}
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);