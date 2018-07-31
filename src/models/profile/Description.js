import React, { Component } from 'react';
import mobx, { observable } from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import OfficesStore from '../../stores/OfficesStore';
import AuthService from '../../services/AuthService';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class Description extends Component {
  @observable officeName;
  
  async findCity() {
    this.officeName = await OfficesStore.findOfficeById(this.props.userStore.currentUser.officeId);
  }
  
  render() {
    const { userStore } = this.props;
    this.findCity();

    return(
      <div>
        {console.log(userStore.currentUser)}
        <WhiteSpace size="lg" />
        <Flex justify='center'>
          <Row-Flex>
            <span className='userData'>{userStore.getFullName}</span>
          </Row-Flex>
        </Flex>
        <Flex>
          <Row-Flex>
            <span className='userCity'>{this.officeName}</span>
          </Row-Flex>
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default Description;

