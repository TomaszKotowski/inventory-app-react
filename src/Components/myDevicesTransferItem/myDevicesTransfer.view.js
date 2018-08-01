import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, NavBar, Icon, Flex, Button, WhiteSpace, List } from 'antd-mobile';
import styles from './myDevicesTransferStyle.css';


const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore','layoutStore')
@observer
class MyDevicesTransfer extends React.Component {
  render() {
    return (

      <Flex direction="column" align="stretch">
      <Flex.Item>    
      <Flex.Item align="center">
          <NavBar
            rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
            My Devices
          </NavBar>
      </Flex.Item>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
              Current Device Here.
          </Item>
      </Flex.Item>
      <Flex.Item align="center" className="device-targed-box1">
            <div>CHOOSE TARGET</div>
        </Flex.Item>
        <Flex.Item align="center" className="device-targed-box2" justify="center;">
            <div>QR CODE</div>
        </Flex.Item>
    </Flex> 

    );
  }
}
export default MyDevicesTransfer;