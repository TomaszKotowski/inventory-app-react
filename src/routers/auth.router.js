import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../models/auth/login.view';
const AuthRouter = () => (
  <Switch>
    <Route exact path='/login' component={Login} />
  </Switch>
);

export default AuthRouter;
