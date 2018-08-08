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
    console.log('-- Did Mount -- ', this.props)
    const { userStore, match } = this.props;

    this.employee = await userStore.getUserById(match.params.id);
    console.log(this.employee)
    // reaction(
    //   () => this.props.userStore.usersList.find(user => user.id == this.props.match.params.id),
    //   (user) => {
    //     this.employee = user;
    //   }
    // )
  }

  // componentDidUpdate() {
  //   console.log('-- Did Upadate -- ')
  //   const {
  //     userStore: {
  //       usersList
  //     },
  //     match
  //   } = this.props;
  //   console.log('usersList - Map', usersList.map((user) => user.id));
  //   console.log('usersList - Filter', this.name = usersList.filter((user) => user.id === match.params.id));
  //   console.log('usersList - Filter', this.name[0].firstName);
  //   console.log(match.params.id);
  // }

  render() {

    // console.log('-- Render -- ')
    // const {
    //   userStore: {
    //     usersList
    //   },
    //   match
    // } = this.props;
    // console.log('usersList - Map', usersList.map((user) => user.id));
    // console.log('usersList - Filter', this.name = usersList.filter((user) => user.id === match.params.id));
    // console.log('usersList - Filter', this.name[0].firsName);
    // console.log(match.params.id);
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

