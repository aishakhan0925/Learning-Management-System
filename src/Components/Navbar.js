import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { VIDEOS } from "../Shared/Videos";
import "../App.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: VIDEOS,
      seen: false,
    };
  }
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
            <div id="sidebar">{list}</div>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
