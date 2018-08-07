import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';
import { Flex } from 'antd-mobile';
import { List } from 'antd';
import { bind } from 'lodash-decorators';
import NavBarView from '../../components/navigation/navBar.view';
import './employeeDevices.style.css'

@inject('userStore', 'devicesStore')
@observer
export default class EmployeeDevices extends Component {

  componentDidUpdate() {
    console.log("emp devie did update", this.props)
    this.id = this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Employee's Devices" />
          <Flex direction="column" align="center" justify="center" >
            <Flex.Item>
              Employee name
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
    )
  }
};

