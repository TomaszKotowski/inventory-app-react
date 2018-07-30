import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './models/auth/login.view';


import { Provider } from 'mobx-react';
import stores from './stores/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}> 
          <Login />
        </Provider>
      </div>
    );
  }
}

export default App;
