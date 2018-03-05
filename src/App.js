import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import MainHome from './components/MainHome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainHome />
  
      </div>
    );
  }
}

export default App;
