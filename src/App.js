import React, { Component } from 'react';
import Login from './models/auth/login.view';


import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './models/navigation/navigation.view'
import { Provider, observer } from 'mobx-react';
import stores from './stores/index';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            <NavigationView>
              <AppRouter />
            </NavigationView>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
