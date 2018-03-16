import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./fontawesome-all";
import "./MainHome.css";
import NavigationHome from "./Navigation-home";
import Sidebar from "./Sidebar";
//import Sidebar from "./Sidebar";
class MainHome extends Component {
  render() {
    return (
      <div className="main-home-window">
        <NavigationHome />
        <Sidebar />
      </div>
    );
  }
}
export default MainHome;
