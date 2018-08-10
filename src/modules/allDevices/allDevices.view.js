import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import NavBarView from '../../components/navigation/navBar.view'
import { NavBar, Icon, Flex, Button, WhiteSpace, Tabs, List, InputItem } from 'antd-mobile';
import { Row, Col } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import './allDevicesStyle.css';


const Item = List.Item;
const Brief = Item.Brief;


@inject('userStore', 'devicesStore', 'layoutStore')
@observer
class AllDevices extends React.Component {
  
  @observable search;

  constructor(props) {
    super(props);

    const { userStore, history } = this.props;
    if (!userStore.currentUser.isAdmin) {
      history.push('/');
    }
  }

  @observable deviceList = [];

  async componentDidMount() {
    const { devicesStore } = this.props;
    this.deviceList = await devicesStore.getAllDevices();
  }

  @Bind()
  onChangeSearch(value) {
    this.search = value.toLowerCase();
  }
  
  render() {
    const { match, devicesStore } = this.props;

    let devicesList = devicesStore.devicesList;
    if (this.search) {
      devicesList = devicesStore.devicesList.filter(e => e.name.toLowerCase().indexOf(this.search) > -1)
    }

    return (
      <div>
        <Flex.Item className="navbar-sticky">
        <NavBarView title='All Devices' />
        </Flex.Item>

          <Flex align="stretch" direction="row">
          
          <List  className="item-under-sticky">
            <InputItem
              clear
              placeholder="Item name"
              onChange={this.onChangeSearch}
            />
          </List>
        
          
          <Link to={`/app/devices/add`} className="item-under-sticky-cross">
              <Icon type="cross" className="cross" />
            </Link>
            
          </Flex>
          
        <Flex.Item>
          {devicesList.map(e => {
            return (
              <Link to={`/app/devices/${e.id}`} key={e.id}>
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

export default AllDevices;
