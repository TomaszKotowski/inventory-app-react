import React from 'react';
import { observer, inject, Observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, Button, WhiteSpace, List, Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';
import NavBarView from '../../components/navigation/navBar.view'

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
        <NavBarView title='My Devices' />

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
