import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import MainHome from './components/MainHome';
import SignUp_Form from './components/signUp';
import Login_Form from './components/Login';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "./constants";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">  
          <Navbar />   
            <Route
              exact path={routes.HOME}
                component = { () => <MainHome />}
            />
            <Route
              exact path={routes.SIGN_IN}
                component = { () => <Login_Form />}
            />   
            <Route
              exact path={routes.SIGN_UP}
                component = { () => <SignUp_Form />}
            />    

             <Route
              exact path={routes.DASHBOARD}
                component = { () => <Dashboard />}
            />    
        </div>
      </Router> 
    );
  }
}

export default App;
