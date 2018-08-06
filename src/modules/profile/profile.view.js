import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Description from './Description';
import ProfileImage from './ProfileImage';
import NavBarView from '../../components/navigation/navBar.view';
import QrGenerator from '../../components/qrCode/generator/qrGenerator';
import { inject } from 'mobx-react';

@inject('userStore')
export default class ProfileView extends React.Component {
  render() {
    return(
      <div>
        <NavBarView title="My profile" />
        <ProfileImage/>
        <Description/>
        <QrGenerator/>
      </div>
    );
  }
}
