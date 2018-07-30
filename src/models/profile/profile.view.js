import React, { Component } from 'react';
import QrCode from './QrCode';
import Description from './Description';
import ProfileImage from './ProfileImage';
import AuthService from '../../services/AuthService';

class ProfileView extends Component {
  render() {
    return(
      <ProfileImage/>
      <Description/>
      <QrCode/>
    );
  }
}

export default new ProfileView();
