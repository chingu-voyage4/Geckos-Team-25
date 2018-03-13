import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainHome from "./components/MainHome";
import Login from "./components/Login";
import ReactBootstrap from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainHome />
        <Login />
      </div>
    );
  }
}

export default App;
