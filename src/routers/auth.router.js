import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AuthRouter = () => (
  <Switch>
    <Route exact path='/login' render={() => <div> Login page </div>} />
  </Switch>
);

export default AuthRouter;
