import React, { Component } from "react";
import "../App.css";

class Progress extends Component {
  render() {
    return (
      <div className="prgrs">
        <progress
          id="health"
          max="100"
          value="10"
          style={{ width: "60%", height: "90px" }}
        ></progress>
        <br />
      </div>
    );
  }
}
export default Progress;
