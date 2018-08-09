import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppRouter from './routers/Router';
import NavigationView from './components/navigation/navigation.view';
import { Provider, observer } from 'mobx-react';
import stores from './stores';
import './App.css';
import PrivateRouter from './routers/private.router'
import Login from './modules/auth/login.view';
import NoMatch from './NoMatch';


@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/app" render={(location, match) => {
                return (
                  <NavigationView location={location} match={location.match}>
                    <AppRouter match={location.match} />
                  </NavigationView>
                )
              }} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
