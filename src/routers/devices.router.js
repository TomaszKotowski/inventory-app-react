import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddDevice from '../modules/addDevice/addDevice.view';
import MyDevices from '../modules/myDevices/myDevices.view';
import AllDevices from '../modules/allDevices/allDevices.view';
import DeviceView from '../modules/deviceView/deviceView';
import DeviceTransfer from '../modules/deviceTransfer/deviceTransfer';
import DeviceTransferStatus from '../modules/deviceTransferStatus/deviceTransferStatus.view'


const DevicesRouter = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.path} component={MyDevices} />
      <Route path={`${match.path}/add`} component={AddDevice} />
      <Route path={`${match.path}/all`} component={AllDevices} />
      <Route exact path={`${match.path}/:id`} component={DeviceView} />
      <Route exact path={`${match.path}/:id/transfer`} component={DeviceTransfer} />
      <Route exact path={`${match.path}/:id/transfer/status`} component={DeviceTransferStatus} />
    </Switch>
  )
};

export default DevicesRouter;