import React, { Component } from "react";
import "./fontawesome-all";
import "./Navbar.css";

import { Link } from "react-router-dom";
import * as routes from "../constants";
import { Button } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <ul className="navbar-registered">
        <li className="boards">
          <a href="#">
            <i class="fab fa-trello" /> Boards
          </a>
        </li>
        <li className="search">
          {" "}
          <input
            id="sb"
            type="text"
            name="search"
            placeholder="Buscar lol search..."
          />
        </li>
        <li className="logo">
          {" "}
          <div>
            <i class="fab fa-trello" />Trello
          </div>
        </li>
        <li className="button-group">
          <div className="plus">
            {" "}
            <i className="fas fa-plus" />
          </div>
          <div className="info">
            {" "}
            <i className="fas fa-info-circle" />
          </div>
          <div className="bell">
            {" "}
            <i className="far fa-bell" />
          </div>
          <div className="profile-pic">
            {" "}
            <div />
          </div>
        </li>
      </ul>
    );
  }
}

class Navbar_Unreg extends Component {
  render() {
    return (
      <ul className="navbar-unregistered">
        <li className="logo-unreg">
          <Link to={routes.HOME}>
            {" "}
            <div>
              <Button>Trello Geck</Button>
            </div>
          </Link>
        </li>
        <li className="search">
          {" "}
          <input
            id="sb"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </li>
        <Button>
        <Link to={routes.SIGN_IN}>
          Login
        </Link>   
        </Button>   
        <Button >  
        <Link to={routes.SIGN_UP}>
          Sign-Up
        </Link>     
        </Button>
      </ul>
    );
  }
}
export default Navbar_Unreg;
