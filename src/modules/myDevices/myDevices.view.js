import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import DeviceService from '../../services/DeviceService';
import NavBarView from '../../components/navigation/navBar.view';
import AuthService from '../../services/AuthService'

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore', 'layoutStore', 'userStore')
@observer
class MyDevices extends React.Component {
  @observable myDevicesList = [];
  
  constructor() {
    super();
    AuthService.getProfile();
  }

  componentDidMount() {
    reaction(
      () => this.props.userStore.currentUser.id,
      () => {
        DeviceService.findDevicesAllocatedToUser(this.props.userStore.currentUser.id)
        .then((value) => {
          this.myDevicesList = value.data;
          this.props.userStore.currentUser.devices = value.data;
        })
      }
    );
  }
  
  render() {
    const { devicesStore } = this.props;
    return (
      <div>
        <NavBarView title="My devices" />
          {this.myDevicesList.map(e =>{
            return (
              <Flex.Item key={`flexItem-${e.id}`}>
                <Item key={`item-${e.id}`} arrow="horizontal" multipleLine>
                  {e.name}
                  <Brief>{e.id}</Brief>
                </Item>
            </Flex.Item>
            )
          })}
      </div>
    );
  }
}

export default  MyDevices;



