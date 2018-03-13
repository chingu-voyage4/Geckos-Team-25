import React, { Component } from "react";
import "./Login.css";
import { Jumbotron, Button } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h2>Login Screen!</h2>
        <form>
          <div>Email</div>
          <input type="text" placeholder="EMAIL" />
          <div>Password</div>
          <input type="text" placeholder="PASSWORD" />
          <div>
            <Button>SUBMIIIT!</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
