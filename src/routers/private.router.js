import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/AuthService';
import AuthorizationData from '../services/AuthorizationData';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   <Route {...rest} render={(props) => (
//     AuthService.isLoggedIn === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} /> 
// };

const PrivateRoute = ({ component: Component, ...rest }) => (
  console.log(AuthService.isLoggedIn()),
  <Route {...rest} render={(props) => (
    AuthService.isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

export default PrivateRoute;  