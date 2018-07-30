import React from 'react';
import { Switch, Route } from 'react-router-dom';

const EmployeesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/employees" render={() => <div>employees</div>} />
    <Route path="/employees/:id" render={({ match }) => <div> employees: {match.params.id} </div>} />
  </Switch>
);

export default EmployeesRouter;