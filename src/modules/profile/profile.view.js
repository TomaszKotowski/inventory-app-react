import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Description from './Description';
import ProfileImage from './ProfileImage';
import NavBarView from '../../components/navigation/navBar.view';

export default class ProfileView extends React.Component {
  render() {
    return(
      <div>
        <NavBarView title="My profile" />
        <ProfileImage/>
        <Description/>
        
      </div>
    );
  }
}
