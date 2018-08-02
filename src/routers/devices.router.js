import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyDevices from '../Components/myDevices/myDevices.view';
import MyDevicesMain from '../Components/myDevicesMainView/myDevicesMain'
import MyDevicesTransfer from '../Components/myDevicesTransferItem/myDevicesTransfer.view';

const DevicesRouter = ({ match }) => (
  <Switch>
    <Route exact path='/devices' component={MyDevices} />
    <Route path="/devices/add_device" render={() => <div>devices add device</div>} />
    <Route exact path="/devices/:id" component={MyDevicesMain} />
    <Route exact path="/devices/:id/transfer" component={MyDevicesTransfer} />
  </Switch>
);

export default DevicesRouter;