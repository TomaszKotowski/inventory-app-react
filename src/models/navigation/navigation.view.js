import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import { Drawer, List, NavBar, Icon, Flex, WhiteSpace } from 'antd-mobile';
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
                  onClick={this.props.layoutStore.onDock}
            />
          }>
          Zonifero
        </NavBar>
        <Flex direction="column" justify="start" align="start">
          <Link to='/user' onClick={this.props.layoutStore.onDock} >PROFILE</Link>
          <Link to='/user/:id/devices' onClick={this.props.layoutStore.onDock}>MY DEVICES</Link>
          <Link to='/devices' onClick={this.props.layoutStore.onDock}>ALL DEVICES</Link>
          <Link to='/employees' onClick={this.props.layoutStore.onDock}>EMPLOYEES</Link>
          <Link to='/identify' onClick={this.props.layoutStore.onDock}>IDENTIFY</Link>
          <Link to='/places' onClick={this.props.layoutStore.onDock}>PLACES</Link>
        </Flex>
      </div>
    );
    return (<div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center' }}
        sidebarStyle={{ border: '1px solid #red' }}
        sidebar={sidebar}
        docked={this.props.layoutStore.docked}
        position='right'
      >
        {this.props.children}
      </Drawer>
    </div>);
  }
}