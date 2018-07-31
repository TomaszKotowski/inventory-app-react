import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRouter from './auth.router';
import UserRouter from './user.router';
import DevicesRouter from './devices.router';
import EmployeesRouter from './employees.router';
import IdentifyRouter from './identify.router';
import PlacesRouter from './places.router';
import NoMatch from '../NoMatch';
import NavigationView from '../models/navigation/navigation.view';
import ProfileRouter from './profile.router';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => <div>Home page by now</div>} />
    <Route path="/login" component={AuthRouter} />
    <Route path="/user" component={UserRouter} />
    <Route path="/devices" component={DevicesRouter} />
    <Route path="/employees" component={EmployeesRouter} />
    <Route path="/identify" component={IdentifyRouter} />
    <Route path="/places" component={PlacesRouter} />
    <Route path="/profile" component={ProfileRouter} />
    <Route component={NoMatch} />
  </Switch>
);

export default AppRouter;
