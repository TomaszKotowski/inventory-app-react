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

  @observable id = `4cb4d5f6-1477-40b9-b855-bac9a2192b3c`
  @observable tempId
  
  componentDidUpdate(){
    this.tempId = this.props.match.params.id  
    console.log("upa  ")
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
                    .filter((device) => device.belongsToId == this.id)
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

