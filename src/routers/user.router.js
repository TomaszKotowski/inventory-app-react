import React from 'react';
import { Switch, Route } from 'react-router-dom';

const UserRouter = ({ match }) => (
  <Switch>
    <Route exact path="/user" render={({ match }) => <div>user {match.path}</div>} />
    <Route exact path="/user/:id" render={({ match }) => <div>user: {match.params.id} </div>} />
    <Route exact path="/user/:id/edit" render={({ match }) => <div>user: {match.params.id}: edit</div>} />
    <Route exact exact path="/user/:id/devices" render={({ match }) => <div>user_devices</div>} />
    <Route exact path="/user/:id/devices/:id" render={({ match }) => <div>user_devices-id</div>} />
  </Switch>

);

export default UserRouter;