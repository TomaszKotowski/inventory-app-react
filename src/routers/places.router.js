import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddPlace from '../modules/addPlace/addPlace.view';


const PlacesRouter = ({ match }) => (
  <Switch>
    <Route exact path="/places" render={() => <div>places</div>} />
    <Route path="/places/add" component={AddPlace} />
    <Route path="/places/:id" render={({ match }) => <div>places: {match.params.id}</div>} />
  </Switch>
);

export default PlacesRouter;