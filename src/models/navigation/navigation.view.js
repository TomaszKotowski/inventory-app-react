import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import { Drawer, List, NavBar, Icon, Flex, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './navigation.style.css'
import TestComponent from './TestComponent';

@observer
export default class NavigationView extends React.Component {
  @observable docked = false;

  @Bind()
  onDock = () => {
    this.docked = !this.docked;
  }

  render() {
    const sidebar = (
      <div>
        <NavBar
          rightContent={<Icon type="ellipsis" onClick={this.onDock} />}>
          Zonifero
        </NavBar>
        <Flex direction="column" justify="start" align="start">
          <Link to='/user' onClick={this.onDock}>PROFILE</Link>
          <Link to='/user/:id/devices' onClick={this.onDock} >MY DEVICES</Link>
          <Link to='/devices' onClick={this.onDock}>ALL DEVICES</Link>
          <Link to='/employees' onClick={this.onDock}>EMPLOYEES</Link>
          <Link to='/identify' onClick={this.onDock}>IDENTIFY</Link>
          <Link to='/places' onClick={this.onDock}>PLACES</Link>
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
        docked={this.docked}
        position='right'
      >
        <NavBar
          rightContent={<Icon type="ellipsis" onClick={this.onDock} />}>
          {this.props.title}
        </NavBar>
        {this.props.children}
      </Drawer>
    </div>);
  }
}