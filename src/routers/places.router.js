import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlacesView from '../modules/places/places.view';
import PlaceDevices from '../modules/placeDevices/placeDevices.view'
import AddPlace from '../modules/addPlace/addPlace.view';

const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path={match.path} component={PlacesView} />
    <Route path={`${match.path}/add`} component={AddPlace} />
    <Route exact path={`${match.path}/:id`} component={PlaceDevices} />
  </Switch>
);

export default PlacesRouter;