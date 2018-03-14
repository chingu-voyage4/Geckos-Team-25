import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Sidebar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "../constants";

class Sidebar extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem href="#">Invite...</ListGroupItem>
        <hr />
        <ListGroupItem href="#">Change Background</ListGroupItem>
        <ListGroupItem href="#">Filter Cards</ListGroupItem>
        <ListGroupItem href="#">Powerups</ListGroupItem>
        <ListGroupItem href="#">Stickers</ListGroupItem>
        <hr />
        <ListGroupItem href="#">Activity </ListGroupItem>
      </ListGroup>
    );
  }
}
export default Sidebar;
