import React from 'react';
import { Switch, Route } from 'react-router-dom';

const UserRouter = ({ match }) => (
  <Switch>
    <Route exact path={match.path} render={({ match }) => <div>user {match.path}</div>} />
    <Route exact path={`${match.path}/:id`} render={({ match }) => <div>user: {match.params.id} </div>} />
    <Route exact path={`${match.path}/:id/edit`} render={({ match }) => <div>user: {match.params.id}: edit</div>} />
    <Route exact exact path={`${match.path}/:id/devices`} render={({ match }) => <div>user_devices</div>} />
    <Route exact path={`${match.path}/:id/devices/:id`} render={({ match }) => <div>user_devices-id</div>} />
  </Switch>

);

export default UserRouter;