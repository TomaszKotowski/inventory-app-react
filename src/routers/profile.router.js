import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../modules/profile/profile.view';

const ProfileRouter = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={Profile} />
  </Switch>
);

export default ProfileRouter;
