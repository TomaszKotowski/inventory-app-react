import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('userStore')
@observer
export default class AdminOnly extends React.Component{
  render() {
    const { userStore, children } = this.props;

    if (userStore.currentUser.isAdmin) {
      return children;
    } else {
      return null;
    }
  }
}



