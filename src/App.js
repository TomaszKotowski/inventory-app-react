import React, { Component } from 'react';
import Login from './models/auth/login.view';
import MyDevices from './models/myDevices/myDevices.view';
import MyDevicesTransfer from  './models/myDevicesTransfer/myDevicesTransfer.view'
import MyDevicesTarget from  './models/myDevicesTarget/myDevicesTarget.view'

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './models/navigation/navigation.view'
import { Provider } from 'mobx-react';
import stores from './stores/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            {/* <NavigationView /> */}
            {/* <AppRouter /> */}
            {/* <Login /> */}
            <MyDevices />
            {/* <MyDevicesTransfer/> */}
            {/* <MyDevicesTarget/> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
