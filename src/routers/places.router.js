import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlacesView from '../modules/inventory/places/places.view';
import PlaceDevices from '../modules/inventory/placeDevices/placeDevices.view';

const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/places" component={PlacesView} />
    <Route path="/places/add_device" render={({ match }) => <div>places: {match.url}</div>} />
    <Route path="/places/:id" component={PlaceDevices} />
  </Switch>
);

export default PlacesRouter;