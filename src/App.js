import React, { Component } from "react";

import "./App.css";
import VideoArea from "./Components/VideoArea.js";
import Progress from "./Components/ProgressBar";
import Button from "./Components/Button";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VideoArea />
        <Progress />
        <Button />
      </React.Fragment>
    );
  }
}
export default App;
