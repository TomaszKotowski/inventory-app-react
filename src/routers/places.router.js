import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AddPlace from '../modules/addPlace/addPlace.view';
import PlacesView from '../modules/places/places.view';
import { PropTypes } from 'mobx-react';

class PlacesRouter extends React.Component {

  render() {
    const { match, location, history } = this.props
    return <Switch>
      <Route exact path="/places" component={PlacesView} />
      <Route path="/places/add" component={AddPlace} />
      {/* <Route path="/places/:id" render={({ match }) => <div>places: {match.params.id}</div>} /> */}
    </Switch>
  }
};
export default withRouter(PlacesRouter);