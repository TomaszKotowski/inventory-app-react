import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import QrCode from './QrCode';
import Description from './Description';
import ProfileImage from './ProfileImage';
// import AuthService from '../../services/AuthService';

export default class ProfileView extends React.Component {
  render() {
    return(
      <div>
        <ProfileImage/>
        <Description/>
        
      </div>
    );
  }
}
