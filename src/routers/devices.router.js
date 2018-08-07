import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddDevice from '../modules/addDevice/addDevice.view';
import MyDevices from '../modules/myDevices/myDevices.view';
import AllDevices from '../modules/allDevices/allDevices.view';
import DeviceView from '../modules/deviceView/deviceView';
import DeviceTransfer from '../modules/deviceTransfer/deviceTransfer';
import DeviceTransferStatus from '../modules/deviceTransferStatus/deviceTransferStatus.view'

const DevicesRouter = ({ match }) => (
  <Switch>
    <Route exact path='/devices' component={MyDevices} />
    <Route path="/devices/add" component={AddDevice} />
    <Route path="/devices/all" component={AllDevices} />
    <Route exact path="/devices/:id" component={DeviceView} />
    <Route exact path="/devices/:id/transfer" component={DeviceTransfer} />
    <Route exact path="/devices/:id/transfer/status" component={DeviceTransferStatus} />
  </Switch>
);

export default DevicesRouter;