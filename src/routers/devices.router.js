import React from 'react';
import { Switch, Route } from 'react-router-dom';

const DevicesRouter = ({ match }) => (
  <Switch>
    <Route exact path='/devices' render={() => <div>devices</div>} />
    <Route path="/devices/add_device" render={() => <div>devices add device</div>} />
    <Route exact path="/devices/:id" render={({ match }) => <div>devices: {match.params.id}</div>} />
    <Route exact path="/devices/:id/transfer" render={({ match }) => <div>devices: {match.params.url}</div>} />
  </Switch>
);

export default DevicesRouter;