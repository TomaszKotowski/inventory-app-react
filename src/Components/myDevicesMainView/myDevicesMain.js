import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, NavBar, Icon, Flex, Button, WhiteSpace, List } from 'antd-mobile';
import styles from './myDevicesMainStyle.css';
import MyDevices from '../myDevices/myDevices.view';
import DevicesStore from '../../stores/DevicesStore';
import { Link, Redirect } from 'react-router-dom';
import { Bind } from 'lodash-decorators';



const Item = List.Item;
const Brief = Item.Brief;



@inject('devicesStore','layoutStore')
@observer
class MyDevicesMain extends React.Component {

  @observable device = {};

  componentDidMount() {   
    reaction(
      () => this.props.devicesStore.devicesList,
      () => {
              let  id = this.props.match.params.id;
              this.device = this.props.devicesStore.findDeviceById(id);
            }
    );
}
  @Bind()
  abc(){
    this.props.history.push(`/devices/${this.device.id}/transfer`);
  }



    
  render() {

    
    
    return (

      <Flex direction="column" align="stretch" className="container-flex">
      <Flex.Item>    
      <Flex.Item align="center">
          <NavBar
            rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker}/>}>
            My Devices
          </NavBar>
      </Flex.Item>
      <Link to="/devices">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
              {this.device.name}
          </Item>
      </Link>
      </Flex.Item>
      <Flex.Item align="center">
            <div>Serial ID: </div>
            <div>{this.device.id}</div>
        </Flex.Item>
        <Flex.Item align="center">
            <div>QR CODE HERE</div>
        </Flex.Item>
      <Flex>
        <Flex.Item>
          {/* <Link to={`/devices/${this.device.id}/transfer`}> */}
          <Button type="primary" onClick = {this.abc}>Transfer</Button>
        
        </Flex.Item>
        
      </Flex>
    </Flex> 

    );
  }
}
export default MyDevicesMain;












   