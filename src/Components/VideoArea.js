import React, { Component } from "react";
import Navigation from "./Navbar";

import "../App.css";
class VideoArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initVideo: "Assets/Videos/vid1.mp4",
    };
  }
  render() {
    return (
      <div>
        <Navigation vidChanger={this.state.initVideo} />
        <div className="ifrm">
          <iframe
            id="iframeID"
            style={{
              border: "10px solid rgba(100, 100, 100, 0.3)",
              borderRadius: "15px",
            }}
            width="800"
            height="400"
            src={this.state.initVideo}
            allow="autoplay;
                encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default VideoArea;
