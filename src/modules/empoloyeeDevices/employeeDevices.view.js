import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';
import { Flex } from 'antd-mobile';
import { List } from 'antd';
import { Bind } from 'lodash-decorators';
import { find } from 'lodash';
import User from '../../models/UserModel';
import NavBarView from '../../components/navigation/navBar.view';
import './employeeDevices.style.css';
import UserService from '../../services/UserService';

@inject('userStore', 'devicesStore')
@observer
export default class EmployeeDevices extends Component {

  @observable empoloyeeName;
  @observable employee;

  async componentDidMount() {
    const { userStore, match } = this.props;
    this.employee = await userStore.getUserById(match.params.id);
  }
  
  render() {
    return this.employee ? (
      <div>
        <div className='top-content'>
          <NavBarView title="Employee's Devices" />
          <Flex direction="column" align="center" justify="center" >
            <Flex.Item>
              {this.employee.fullName}
            </Flex.Item>
            <Flex.Item>
              Devices:
            </Flex.Item>
          </Flex>
        </div>
        <div className='app-content'>
          <Flex direction='column' align='center' justify='center'>
            <Flex.Item className='list-item'>
              <List className='list' >
                {
                  this.props.devicesStore.devicesList
                    .filter((device) => device.belongsToId == this.props.match.params.id)
                    .map((device) => {
                      return (
                        <List.Item
                          key={device.id}
                          arrow="horizontal"
                        >{device.name}
                        </List.Item>
                      )
                    })
                }
              </List>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    ) : null;
  }
};

