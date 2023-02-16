import React, { Component } from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

class Header extends Component {
  // constructor() {
  //   super();

  // }
  render() {
    return (
      <>
        <Header className="container">
          <LeftHeader />
          <RightHeader handling={this.props.handling} />
        </Header>
      </>
    );
  }
}

export default Header;
