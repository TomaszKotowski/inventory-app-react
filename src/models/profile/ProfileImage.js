import React, { Component } from 'react';
import mobx from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import UsersStore from '../../stores/UsersStore';

import './profileImage.css';

class ProfileImage extends Component {
  render() {
    return(
      <div>
        <WhiteSpace size="lg"/>
        <Flex justify='center'>
          <img className='avatar' src={UsersStore.getPictureAvatar} alt="User avatar"/>
        </Flex>
        <WhiteSpace size="lg"/>
      </div>
    );
  }
}
