import React, { Component } from "react";
import { Navbar, NavbarBrand, Progress } from "reactstrap";
import { VIDEOS } from "../Shared/Videos";
import "../App.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: VIDEOS,
      prg: 10,
    };
  }
  changeFunc = () => {
    this.setState({
      prg: (this.state.prg += 10),
    });
  };

  render() {
    //sideBar Toggle Function
    function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }
    //SideBar list
    const list = this.state.videos.map((change) => {
      return (
        <div key={change.id}>
          <ul>
            <li key={change.id} onClick={change.click}>
              {" "}
              {change.name}{" "}
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <Navbar dark style={{ backgroundColor: "#151719" }}>
          <NavbarBrand>
            <div class="toggle-btn" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="sidebar">
              <h5 onClick={this.changeFunc}>{list}</h5>
            </div>
          </NavbarBrand>
        </Navbar>
        <div className="prgrs">
          <progress
            id="health"
            max="100"
            value={this.state.prg}
            style={{ width: "60%", height: "40px" }}
          ></progress>
          <br />
        </div>
      </div>
    );
  }
}

export default Navigation;
