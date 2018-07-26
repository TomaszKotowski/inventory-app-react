import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import NoMatch from '../NoMatch';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter history={history} >
    <div>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/users/:id" component={App}></Route> {/* profile*/}
        <Route path="/users/:id/edit" component={App}></Route> {/* edit profile*/}
        <Route path="/users/:id/devices" component={App}></Route> {/* my devices*/}
        <Route path="/users/:id/devices/:id" component={App}></Route> {/* my device to transfer*/}
        <Route path="/users/:id/devices/:id/tranfer" component={App}></Route> {/* my device transfer success*/}
        <Route path="/all_devices" component={App}></Route> {/* edit my devices*/}
        <Route path="/all_devices/add_device" component={App}></Route> {/* edit my devices*/}
        <Route component={NoMatch}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
