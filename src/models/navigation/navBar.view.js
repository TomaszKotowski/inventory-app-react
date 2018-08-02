import React, { Component } from 'react';
import { inject, observer } from '../../../node_modules/mobx-react';
import { NavBar, Icon } from '../../../node_modules/antd-mobile';

@inject('layoutStore')
@observer
export default class NavBarView extends Component {
  render() {
    return (
      <div>
        <NavBar
          rightContent={
            <Icon type="ellipsis"
              onClick={this.props.layoutStore.handleDrawerDocker}
            />
          }>
          {this.props.title}
        </NavBar>
      </div>
    )
  }
};