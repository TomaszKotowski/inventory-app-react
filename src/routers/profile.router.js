import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../models/profile/profile.view';

const ProfileRouter = () => (
  <Switch>
    <Route exact path='/profile' component={Profile} />
  </Switch>
);

export default ProfileRouter;