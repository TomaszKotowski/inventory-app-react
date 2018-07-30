import React, { Component } from 'react';
import mobx from 'mobx';
import { Flex, FlexItem, WhiteSpace } from 'antd-mobile';
import UsersStore from '../../stores/UsersStore';
import OfficesStore from '../../stores/OfficesStore';

class Description extends Component {
  render() {
    return(
      <div>
        <WhiteSpace size="lg" />
        <Flex justify='center'>
          <FlexItem>
            <span className='userData'>{UsersStore.currentUser.firstName + ' ' + UsersStore.currentUser.lastName}</span>
          </FlexItem>
          <FlexItem>
            <span className='userCity'>{OfficesStore.findOfficeById(UsersStore.currentUser.officeId)}</span>
          </FlexItem>
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default new Description();
