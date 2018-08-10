import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Identify from '../modules/identify/identifyView';

const IdentifyRouter = ({ match }) => (
  <Switch>
    <Route path={match.path} component={Identify} />
  </Switch>
);

export default IdentifyRouter;