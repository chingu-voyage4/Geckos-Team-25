import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import MainHome from './components/MainHome';
import Login_Form from './components/Login'
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
