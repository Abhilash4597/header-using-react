import React, { Component } from "react";

class RightComp extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <>
        <div className="right_side">
          <i className="fa-solid fa-circle-half-stroke"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <button className="pro right_btn">Pro</button>
          <button className="certified right_btn">Get Certified</button>
          <button className="Website right_btn">Create Website</button>
          <button className="log_in right_btn" onClick={this.props.handling}>
            Log in
          </button>
        </div>
      </>
    );
  }
}

export default RightComp;
