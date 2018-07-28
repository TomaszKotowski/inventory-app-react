import React, { Component } from 'react';
import {observer} from "mobx-react";
import logo from './logo.svg';
import './App.css';
import { Provider, inject } from 'mobx-react';
import stores from './stores/index';

import UserService from './services/UserService';
import DeviceService from './services/DeviceService';
import DevicesStore from './stores/DevicesStore';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Provider {...stores}>  */}
          {DeviceService.getAllDevices()}
          {/* <span>{DevicesStore.devicesList[0]}</span> */}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
