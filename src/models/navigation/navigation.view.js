import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { observable } from 'mobx';
export default class NavigationView extends React.Component {

  render() {
    return (<div>
      <NavBar
        mode="dark"
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    </div>);
  }
}
