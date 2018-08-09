import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';
import { Flex } from 'antd-mobile';
import { List } from 'antd';
import { bind } from 'lodash-decorators';
import NavBarView from '../../components/navigation/navBar.view';
import './placeDevices.style.css'

@inject('placesStore', 'devicesStore')
@observer
export default class PlaceDevices extends Component {

  @observable place
  @observable deviceList = [];

  async componentDidMount() {
    const { placesStore, devicesStore, match } = this.props;
    this.place = await placesStore.getPlaceById(match.params.id);
    this.deviceList = await devicesStore.getAllDevices();

  }

  render() {
    return this.place ? (
      <div>
        <div className='top-content'>
          <NavBarView title="Place's Devices" />
          <Flex direction="column" align="center" justify="center" >
            <Flex.Item>
              {this.place.name}
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
                  this.deviceList
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
    ) : null
  }
};

