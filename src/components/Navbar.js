import React, { Component } from "react";
import "./fontawesome-all";
import "./Navbar.css";

import { Link } from "react-router-dom";
import * as routes from "../constants";

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
              <i className="fab fa-trello" />Trello Geck
            </div>
          </Link>
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
        <li className="button-group">
          <button className="login">
            <Link to={routes.SIGN_IN}> Login</Link>
          </button>
          <button className="sign-up">
            <Link to={routes.SIGN_UP}> Sign-Up</Link>
          </button>
        </li>
      </ul>
    );
  }
}
export default Navbar_Unreg;
