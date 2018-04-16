import React, { Component } from "react";
import{NavbarAuth} from "./Navbar";
import {Boards} from "./Boards.js";

class Dashaboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <NavbarAuth/>
       <h1>This the Dashaboard</h1>      
       <Boards/>
      </div>
    );
  }
}
export default Dashaboard;
