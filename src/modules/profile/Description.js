import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import AuthService from '../../services/AuthService';

@inject('userStore', 'officesStore')
@observer
class Description extends Component {
  @observable officeName;

  componentDidMount() {
    reaction(
      () => this.props.officesStore.officesList,
      () => {
        const officeArr = this.props.officesStore.officesList.forEach(item => {
          if(item.id == this.props.userStore.currentUser.officeId) {
            this.officeName = item.name;
          }
        });
      }
    );
  }

  render() {
    const { userStore } = this.props;

    return(
      <div>
        <WhiteSpace size="lg" />
        <Flex justify='center'>
          <Row-Flex>
            <span className='userData'>{userStore.currentUser.fullName}</span>
          </Row-Flex>
        </Flex>
        <Flex justify='center'>
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

