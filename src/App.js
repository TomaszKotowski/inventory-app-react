import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, inject } from 'mobx-react';
import store from './stores';

import UserService from './services/UserService';

class App extends Component {
  
  testApi() {
    UserService.getUserById('81f29503-837e-42e9-b763-025f02338dcb');
  }

  render() {
    return (
      <div className="App">
        <Provider {...stores}> 
          {this.testApi()}
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Provider>
      </div>
    );
  }
}

export default App;
