import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployeesView from '../modules/employees/employees.view';
import EmployeeDevices from '../modules/empoloyeeDevices/employeeDevices.view'

const EmployeesRouter = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={EmployeesView} />
    <Route path={`${match.path}/:id`} component={EmployeeDevices} />
  </Switch>
);

export default EmployeesRouter;