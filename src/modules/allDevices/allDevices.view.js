import React from 'react';
import { observer, inject, Observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, Button, WhiteSpace, Tabs, List, InputItem } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './allDevicesStyle.css';
import { Bind } from 'lodash-decorators';
import { observable } from 'mobx';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore', 'layoutStore')
@observer
class MyDevices extends React.Component {



  @observable search;

  componentDidMount() {
    this.devicesList = this.props.devicesStore.devicesList;
  }

  @Bind()
  onChangeSearch(value) {
    this.search = value.toLowerCase();
  }
  

  render() {
    const { devicesStore } = this.props;

    let devicesList = devicesStore.devicesList;
    if (this.search) {
      devicesList = devicesStore.devicesList.filter(e => e.name.toLowerCase().indexOf(this.search) > -1)
    }

    return (
      <div>
        <Flex.Item className="navbar-sticky">
          <NavBar
            rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />} className="devices-navbar">
            My Devices
            </NavBar>
        </Flex.Item>
        { /* WSTAWIC FLEX ITEM? */}
          <List renderHeader={() => 'Search Item : '} className="item-under-sticky">
            <InputItem
              clear
              placeholder="Item name"
              onChange={this.onChangeSearch}
            />
          </List>
        
        <Flex.Item>
          {devicesList.map(e => {
            return (
              <Link to={`/devices/${e.id}`} key={e.id}>
                <Flex.Item>
                  <Item arrow="horizontal" multipleLine >
                    {e.name}
                    <Brief>{e.id}</Brief>
                  </Item>
                </Flex.Item>
              </Link>
            )
          })}
        </Flex.Item>
      </div>
    );
  }
}

export default MyDevices;
