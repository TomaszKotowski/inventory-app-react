import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Drawer, NavBar, Icon, Flex, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './navigation.style.css';

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
        <List>
        <List.Item key='profile'>
          <Link to='/profile' onClick={this.props.layoutStore.handleDrawerDocker}>PROFILE</Link>
        </List.Item>
        <List.Item key='myDevices'>
          <Link to='/devices' onClick={this.props.layoutStore.handleDrawerDocker}>MY DEVICES</Link>
        </List.Item>
        <List.Item key='allDevices'>
          <Link to='/devices/all' onClick={this.props.layoutStore.handleDrawerDocker}>ALL DEVICES</Link>
        </List.Item>
        <List.Item key='addDevices'>
          <Link to='/devices/add' onClick={this.props.layoutStore.handleDrawerDocker}>ADD DEVICES</Link>
        </List.Item>
        <List.Item key='employees'>
          <Link to='/employees' onClick={this.props.layoutStore.handleDrawerDocker}>EMPLOYEES</Link>
        </List.Item>
        <List.Item key='identify'>
          <Link to='/identify' onClick={this.props.layoutStore.handleDrawerDocker}>IDENTIFY</Link>
        </List.Item>
        <List.Item key='places'>
          <Link to='/places' onClick={this.props.layoutStore.handleDrawerDocker}>PLACES</Link>
        </List.Item>
        <List.Item key='addPlaces'>
          <Link to='/places/add' onClick={this.props.layoutStore.handleDrawerDocker}>ADD PLACES</Link>
        </List.Item>
      </List>
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
        enableDragHandle={false}
      >
        {this.props.children}
      </Drawer>
    </div>);
  }
}