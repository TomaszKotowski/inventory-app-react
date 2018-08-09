import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Identify from '../modules/identify/identifyView';
import IdentifyResult from '../modules/identifyResult/identifyResult.view';

const IdentifyRouter = ({ match }) => (
  <Switch>
    <Route exact path="/identify" component={Identify}/>
    <Route path="/identify/:id"  component={IdentifyResult}/>
  </Switch>
);

export default IdentifyRouter;