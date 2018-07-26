import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from '../App';
import UserRouter from './user.router'
import NoMatch from '../NoMatch';


export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/user" component={App} />
        <Route path="/*" component={NoMatch}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
