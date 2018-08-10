import React, { Component } from 'react';
import mobx from 'mobx';
import { Flex, WhiteSpace, Icon } from 'antd-mobile';
import UsersStore from '../../stores/UsersStore';
import { inject, observer } from 'mobx-react';
import './profileImage.css';
import UserModel from '../../models/UserModel';


@inject('userStore')
@observer
class ProfileImage extends Component {

  render() {
    return (
      <div>
        <WhiteSpace size="xl" />
        <Flex justify='center'>
          {this.props.src ? (
            <img className='avatar' src={this.props.src} alt="User avatar" />
          ) : (
              <Icon type="loading" />
            )}
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default ProfileImage;
