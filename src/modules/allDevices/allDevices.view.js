import React from 'react';
import { observable } from 'mobx';
import { observer, inject, Observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, Button, WhiteSpace, List, Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom';
import NavBarView from '../../components/navigation/navBar.view'

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore')
@observer
class MyDevices extends React.Component {

  @observable deviceList = [];

  async componentDidMount() {
    const { devicesStore } = this.props;
    this.deviceList = await devicesStore.getAllDevices();
  }

  render() {
    const { match } = this.props
    return (
      <div>
        <Flex.Item className="navbar-sticky">
          <NavBarView title='All Devices' />
        </Flex.Item>
        <Flex.Item className="item-under-sticky">
          {this.deviceList.map(e => {
            return (
              <Link to={`${match.path}/${e.id}`} key={e.id}>
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
