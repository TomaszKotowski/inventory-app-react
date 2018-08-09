import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../modules/auth/login.view';

const AuthRouter = () => (
  <Switch>
    <Route path='/login' component={Login} />
  </Switch>
);

export default AuthRouter;
