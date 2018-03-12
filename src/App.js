import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import MainHome from './components/MainHome';
import SignUp_Form from './components/signUp';
import Login_Form from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login_Form />
      </div>
    );
  }
}

export default App;
