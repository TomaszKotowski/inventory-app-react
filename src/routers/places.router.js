import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPlace from '../modules/addPlace/addPlace.view';
import PlacesView from '../modules/places/places.view';

const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/places" component={PlacesView} />
    <Route path="/places/add" component={AddPlace} />
    <Route path="/places/:id" render={({ match }) => <div>places: {match.params.id}</div>} />
  </Switch>
);

export default PlacesRouter;