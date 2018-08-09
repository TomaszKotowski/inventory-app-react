import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRouter from './auth.router';
import UserRouter from './user.router';
import DevicesRouter from './devices.router';
import EmployeesRouter from './employees.router';
import IdentifyRouter from './identify.router';
import PlacesRouter from './places.router';
import ProfileRouter from './profile.router';
import Login from '../modules/auth/login.view';
import PrivateRoute from './private.router';
import AuthService from '../services/AuthService';
import NoMatch from '../NoMatch';

class AppRouter extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        {
          console.log('App Router', this.props)
        }
        <Route exact path={match.path} component={NoMatch} />
        <Route path={`${match.path}/user`} component={UserRouter} />
        <Route path={`${match.path}/devices`} component={DevicesRouter} />
        <Route path={`${match.path}/employees`} component={EmployeesRouter} />
        <Route path={`${match.path}/identify`} component={IdentifyRouter} />
        <Route path={`${match.path}/places`} component={PlacesRouter} />
        <Route path={`${match.path}/profile`} component={ProfileRouter} />
      </Switch>
    )
  }
};

export default AppRouter;