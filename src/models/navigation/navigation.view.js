import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { observable } from 'mobx';
import { observer } from "mobx-react";

@observer
export default class NavigationView extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/user'>PROFILE</Link>
        <Link to='/user/:id/devices'>MY DEVICES</Link>
        <Link to='/devices'>ALL DEVICES</Link>
        <Link to='/employees'>EMPLOYEES</Link>
        <Link to='/identify'>IDENTIFY</Link>
        <Link to='/places'>PLACES</Link>
      </nav>
    );
  }
}

