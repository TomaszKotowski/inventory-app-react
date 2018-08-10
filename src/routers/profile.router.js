import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../modules/profile/profile.view';
import EditUser from '../modules/editUser/editUserView';
const ProfileRouter = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={Profile} />
    <Route exact path={`${match.path}/edit`} component={EditUser} />
  </Switch>
);

export default ProfileRouter;
