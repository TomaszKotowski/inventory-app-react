import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Description from './Description';
import ProfileImage from './ProfileImage';
import NavBarView from '../../components/navigation/navBar.view';
import QrGenerator from '../../components/qrCode/generator/qrGenerator';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
export default class ProfileView extends React.Component {
  render() {
    console.log(this.props.userStore.currentUser.id)
    return(
      <div>
        <NavBarView title="My profile" />
        <ProfileImage/>
        <Description/>
        <QrGenerator id={this.props.userStore.currentUser.id} />
      </div>
    );
  }
}
