import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './models/navigation/navigation.view'
import { Provider, observer } from 'mobx-react';
import stores from './stores/index';
import './App.css';
import TestComponent from './models/navigation/TestComponent'

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            <NavigationView title="Title">
              <AppRouter />
            </NavigationView>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
