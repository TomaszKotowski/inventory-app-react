import React from 'react';
import { Switch, Route } from 'react-router-dom';

const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/places" render={() => <div>places</div>} />
    <Route path="/places/add_device" render={({ match }) => <div>places: {match.url}</div>} />
    <Route path="/places/:id" render={({ match }) => <div>places: {match.params.id}</div>} />
  </Switch>
);

export default PlacesRouter;