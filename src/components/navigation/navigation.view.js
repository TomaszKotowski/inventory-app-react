import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Drawer, NavBar, Icon, Flex, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './navigation.style.css';
import AuthService from '../../services/AuthService';
import UserModel from "../../models/UserModel";
import AdminOnly from '../../modules/adminLogin/adminOnly';



@inject('layoutStore')
@observer
export default class NavigationView extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    if (!AuthService.isLoggedIn()) {

      location.history.push('/');
    }
  }

  handleLogOut() {
    AuthService.logout();
    this.props.layoutStore.handleDrawerDocker
  }

  render() {
    const { match, layoutStore } = this.props;
    // console.log(this.props)
    const sidebar = (
      <div>
        <NavBar
          // className="navbar-sticky"
          rightContent={
            <Icon type="ellipsis"
              onClick={layoutStore.handleDrawerDocker}
            />
          }>
          Zonifero
        </NavBar>
        <Flex direction="column" justify="start" align="start">
          <List>
            <Link to={`${match.path}/profile`} onClick={layoutStore.handleDrawerDocker}>
              <List.Item key='profile'>
                PROFILE
            </List.Item>
            </Link>
            <Link to={`${match.path}/devices`} onClick={layoutStore.handleDrawerDocker}>
              <List.Item key='myDevices'>
                MY DEVICES
            </List.Item>
            </Link>
            <AdminOnly>
              <Link to={`${match.path}/devices/all`} onClick={layoutStore.handleDrawerDocker}>
                <List.Item key='allDevices'>
                  ALL DEVICES
              </List.Item>
              </Link>
            </AdminOnly>
            <Link to={`${match.path}/employees`} onClick={layoutStore.handleDrawerDocker}>
              <List.Item key='employees'>
                EMPLOYEES
              </List.Item>
            </Link>
            <Link to={`${match.path}/identify`} onClick={layoutStore.handleDrawerDocker}>
              <List.Item key='identify'>
                IDENTIFY
            </List.Item>
            </Link>
            <Link to={`${match.path}/places`} onClick={layoutStore.handleDrawerDocker}>
              <List.Item key='places'>
                PLACES
            </List.Item>
            </Link>
            <Link to="/" onClick={this.handleLogOut}>
              <List.Item key='places'  >
                LOG OUT
            </List.Item>
            </Link>
          </List>
        </Flex>
      </div>
    );
    return (<div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        sidebar={sidebar}
        docked={layoutStore.drawerDocked}
        position='right'
        enableDragHandle={false}
      >
        {this.props.children}
      </Drawer>
    </div>);
  }
}