import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeeDevices from '../modules/empoloyeeDevices/employeeDevices.view'

const EmployeesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/employees" render={() => <div>emp</div>} />
    <Route path="/employees/:id" component={EmployeeDevices} />
  </Switch>
);

export default EmployeesRouter;