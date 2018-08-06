import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlacesView from '../modules/inventory/places/places.view';
import PlaceDevices from '../modules/inventory/placeDevices/placeDevices.view'
import AddPlace from '../modules/addPlace/addPlace.view';

const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/places" component={PlacesView} />
    <Route exact path="/places/:id" component={PlaceDevices} />
    <Route path="/places/add" component={AddPlace} />
  </Switch>
);

export default PlacesRouter;