import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Drawer, NavBar, Icon, Flex } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './navigation.style.css'

@inject('layoutStore')
@observer
export default class NavigationView extends React.Component {

  render() {
    const sidebar = (
      <div>
        <NavBar
          rightContent={
            <Icon type="ellipsis"
              onClick={this.props.layoutStore.handleDrawerDocker}
            />
          }>
          Zonifero
        </NavBar>
        <Flex direction="column" justify="start" align="start">
          <Link to='/user' onClick={this.props.layoutStore.handleDrawerDocker}>PROFILE</Link>
          <Link to='/user/:id/devices' onClick={this.props.layoutStore.handleDrawerDocker}>MY DEVICES</Link>
          <Link to='/devices' onClick={this.props.layoutStore.handleDrawerDocker}>ALL DEVICES</Link>
          <Link to='/employees' onClick={this.props.layoutStore.handleDrawerDocker}>EMPLOYEES</Link>
          <Link to='/identify' onClick={this.props.layoutStore.handleDrawerDocker}>IDENTIFY</Link>
          <Link to='/places' onClick={this.props.layoutStore.handleDrawerDocker}>PLACES</Link>
        </Flex>
      </div>
    );
    return (<div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        sidebar={sidebar}
        docked={this.props.layoutStore.drawerDocked}
        position='right'
      >
        {this.props.children}
      </Drawer>
    </div>);
  }
}