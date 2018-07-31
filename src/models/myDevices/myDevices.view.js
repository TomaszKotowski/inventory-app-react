import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import UserModel from '../../models/UserModel';
import DeviceModel from '../../models/DeviceModel';
import DevicesStore from '../../stores/DevicesStore';
import { NavBar, Icon, Flex, Button, WhiteSpace, List } from 'antd-mobile';
import styles from './myDevicesStyle.css';
import DeviceService from '../../services/DeviceService';
import index from '../../stores';

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore')
@observer
class MyDevices extends React.Component {

  
  componentDidMount() {
    DeviceService.getAllDevices();
    
    const { devicesStore } = this.props;
    const abc = reaction(
      () => devicesStore.devicesList.map(e => e.id),
      ids=> console.log(ids));      // próba numer 2000
  
      

  }

  render() {
    const { devicesStore } = this.props;
    // console.log('render', devicesStore.devicesList)
    // return null;
    return devicesStore.devicesList.map(e => {
      // console.log(e.name);
      return (
        <div>
        {e.name}
        </div>
        // <Flex.Item key={e.id}>
        //   <Item arrow="horizontal" multipleLine onClick={() => {}}>
        //       a{e.name}
        //       <Brief>{e.id}</Brief>
        //   </Item>
        // </Flex.Item>
      )})
// return (
   
//        <Flex direction="column" align="stretch">
//               <Flex.Item>
//               <NavBar
//                   rightContent={<Icon type="ellipsis"/>}className="devices-navbar">
//                   My Devices
//               </NavBar>
//               </Flex.Item>
//               {allDevice}
//       </Flex>

    
  // )
  }
}
//niektore rzeczy sa wykomentowane na potrzebe testow XD

export default  MyDevices;