import React from 'react';
import { observer, inject, Observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import { observable } from 'mobx';
import NavBarView from '../../components/navigation/navBar.view'
import { NavBar, Icon, Flex, Button, WhiteSpace, Tabs, List, InputItem } from 'antd-mobile';
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
        <NavBarView title='My Devices' />
        </Flex.Item>

          <Flex.Item className="input-item" direction="row">
          <List  className="item-under-sticky">
            <InputItem
              clear
              placeholder="Item name"
              onChange={this.onChangeSearch}
            />
          </List>
          <WhiteSpace size='sm'/>
          <Link to='/devices/add'>
              <Icon type="cross" className="cross" />
            </Link>
            <WhiteSpace size='sm'/>
          </Flex.Item>
          
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

export default AllDevices;
