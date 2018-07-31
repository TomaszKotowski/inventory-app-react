import React, { Component } from 'react';
import mobx, { observable, reaction } from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import { inject, observer } from 'mobx-react';
import OfficesStore from '../../stores/OfficesStore';
import AuthService from '../../services/AuthService';
import OfficeService from '../../services/OfficeService';

@inject('userStore', 'officesStore')
@observer
class Description extends Component {
  @observable officeName;
  
  constructor() {
    OfficeService.getAllOffices();
    super();
  }
  
  componentDidMount() {
    // console.log(this.props.officesStore.officesList.length);
    reaction(
      () => this.props.officesStore.officesList,
      () => {
        console.log('hi');
      }
    );
  }

  findCity() {
    this.officeName = OfficesStore.findOfficeById(this.props.userStore.currentUser.officeId);
  }
  
  render() {
    const { userStore } = this.props;

    return(
      <div>
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

