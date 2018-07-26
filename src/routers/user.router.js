import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';

const UserRouter = () => (
    <Route path="/user" component={App} />


);

export default UserRouter;