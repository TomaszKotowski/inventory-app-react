import React from 'react';
import { observer, inject, Observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, Button, WhiteSpace, List, Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';
import './allDevicesStyle.css';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore', 'layoutStore')
@observer
class MyDevices extends React.Component {

  render() {
    const { devicesStore } = this.props;

    return (
      <div>
        <Flex.Item className="navbar-sticky">
          <NavBar
            rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />} className="devices-navbar">
            My Devices
            </NavBar>
        </Flex.Item>
        <Flex.Item className="item-under-sticky">
          {devicesStore.devicesList.map(e => {
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
