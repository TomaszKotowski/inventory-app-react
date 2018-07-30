import React, { Component } from 'react';
import {observer} from "mobx-react";
import logo from './logo.svg';
import './App.css';
import Login from './models/auth/login.view';




class App extends Component {
  

  render() {
    return (
      
      <Login />
      
    );
  }
}

export default App;
