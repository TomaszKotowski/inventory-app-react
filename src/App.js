import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './components/navigation/navigation.view';
import { Provider, observer } from 'mobx-react';
import stores from './stores';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            <Route render={(location) => {
              return (
                <NavigationView location={location}>
                  <AppRouter />
                </NavigationView>
              )
            }} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
