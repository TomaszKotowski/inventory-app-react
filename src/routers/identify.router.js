import React from 'react';
import { Switch, Route } from 'react-router-dom';

const IdentifyRouter = ({ match }) => (
  <Switch>
    <Route exact path="/identify" render={() => <div> Identify </div>} />
    <Route path="/identify/:id" render={({ match }) => <div> Identify:{match.params.id} </div>} />
  </Switch>
);

export default IdentifyRouter;