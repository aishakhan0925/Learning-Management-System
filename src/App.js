import React, { Component } from "react";
import Progress from "./Components/ProgressBar";

import "./App.css";
import VideoArea from "./Components/VideoArea.js";
import Button from "./Components/Button";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VideoArea />
        <Button />
      </React.Fragment>
    );
  }
}
export default App;
