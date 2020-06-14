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
      disabled: [],

    };
    //this.changeFunc = this.changeFunc.bind(this);
    //getData = getData.bind(this)

  }

  changeFunc = () => {

    //  this.setState({
    //    prg: (this.state.prg += 10),
    //})disabled: [],\
    //document.getElementById('7').disabled = true;
    setTimeout(
        function() {
          this.setState({prg: (this.state.prg += 10)});
        }
            .bind(this),
        1000
    );

  };

  render() {
    //sideBar Toggle Function
    function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }
    //SideBar list
    const list = this.state.videos.map((change) => {
      //function disableButton(change){
      //document.getElementById(change.id).disabled = true;
      //alert("Button has been disabled.");

    //}
      //test(change.click)
      //function getData(){
      //  const ID = document.getElementById("iframeID");
      //  ID.src =change.src;
      //  this.setState({
      //
      //    disabled: [this.state.disabled, change.id]
      //  })
      //}

      return (
        <div >
          <ul key={change.id}>
            <li key={change.id}   onClick={() =>{
                const ID = document.getElementById("iframeID");
                ID.src =change.src;
                if(this.state.prg == '100' || this.state.prg >= '100'){

                   document.getElementById("next").disabled = false;
                //document.getElementById("next").disabled = false;
                 alert('y0u have successfully completed this lesson, click next for new lesson.. Thank You..!')
                }else{
                    document.getElementById("next").disabled = true;
                    return false;
                }
            }}
              >
              {" "}
              {change.name}
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
