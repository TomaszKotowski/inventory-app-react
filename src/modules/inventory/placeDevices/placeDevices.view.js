import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';
import { Flex } from 'antd-mobile';
import { List } from 'antd';
import { bind } from 'lodash-decorators';
import PlacesStore from '../../../stores/PlacesStore';
import DevicesStore from '../../../stores/DevicesStore';
import NavBarView from '../../../components/navigation/navBar.view';
import './placeDevices.style.css'

@inject('placesStore', 'devicesStore')
@observer
export default class PlaceDevices extends Component {

  @observable id = `4cb4d5f6-1477-40b9-b855-bac9a2192b3c`
  @observable place
  @observable deviceList

  componentDidMount() {
    console.log('Did mount');
  }

  render() {
    return (
      <div>
        <div className='top-content'>
          <NavBarView title="Place's Devices" />
          <Flex direction="column" align="center" justify="center" >
            <Flex.Item>
              Place name
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
                          multipleLine
                          onClick={() => { }}
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

