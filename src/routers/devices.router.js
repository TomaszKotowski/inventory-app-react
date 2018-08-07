import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddDevice from '../modules/addDevice/addDevice.view';
import MyDevices from '../modules/myDevices/myDevices.view';
import AllDevices from '../modules/allDevices/allDevices.view';

const DevicesRouter = ({ match }) => (
  <Switch>
    <Route exact path='/devices' component={MyDevices} />
    <Route path="/devices/add" component={AddDevice} />
    <Route path="/devices/all" component={AllDevices} />
    <Route exact path="/devices/:id" render={({ match }) => <div>devices: {match.params.id}</div>} />
    <Route exact path="/devices/:id/transfer" render={({ match }) => <div>devices: {match.params.url}</div>} />
  </Switch>
);

export default DevicesRouter;