import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import Description from './Description';
import ProfileImage from './ProfileImage';
import NavBarView from '../../components/navigation/navBar.view';
import QrGenerator from '../../components/qrCode/generator/qrGenerator';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
export default class ProfileView extends React.Component {
  @observable currentUser;

  async componentDidMount() {
    this.currentUser = await this.props.userStore.getCurrentUser();
  }

  render() {
    return this.currentUser ? (
      <div>
        <NavBarView title="My profile" />
        <ProfileImage src={this.props.userStore.getPictureAvatarLink}/>
        <Description/>
        <QrGenerator id={this.currentUser.id} />
      </div>
    ) : null;
  }
}
