import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import OfficesStore from '../../stores/OfficesStore';

@inject('userStore', 'officesStore')
@observer
class Description extends Component {

  @observable city = '';

  async componentDidMount() {
    console.log('oficeID', this.props.userStore.currentUser.officeId);
    const tmp = await OfficesStore.getOfficeById(this.props.userStore.currentUser.officeId);
    console.log(tmp);
    this.city = tmp.name;

    reaction(
      () => this.props.userStore.currentUser.officeId,
      () => {
        const tmp = OfficesStore.getOfficeById(this.props.userStore.currentUser.officeId).data;
        console.log('raect', tmp);
        this.city = tmp.data;
      })
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
            <span className='userCity'>Miasto: {this.city}</span>
          </Row-Flex>
        </Flex>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

export default Description;







