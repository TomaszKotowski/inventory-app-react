import React, { Component } from 'react';
import mobx from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import UsersStore from '../../stores/UsersStore';
import { inject, observer } from 'mobx-react';
import './profileImage.css';
import UserModel from '../../models/UserModel';


@inject('userStore')
@observer
class ProfileImage extends Component {
  
  render() {
    return(
      <div>
        <WhiteSpace size="xl"/>
        <Flex justify='center'>
          <img className='avatar' src={this.props.userStore.getPictureAvatarLink} alt="User avatar"/>
        </Flex>
        <WhiteSpace size="lg"/>
      </div>
    );
  }
}

export default ProfileImage;
