import React, { Component } from 'react';
import { observer } from "mobx-react";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './models/navigation/navigation.view'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationView />
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
