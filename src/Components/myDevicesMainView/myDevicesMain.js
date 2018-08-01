import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { Toast, NavBar, Icon, Flex, Button, WhiteSpace, List } from 'antd-mobile';
import styles from './myDevicesMainStyle.css';


const Item = List.Item;
const Brief = Item.Brief;




@inject('devicesStore','layoutStore')
@observer
class MyDevicesMain extends React.Component {
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
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
              Current Device Here.
          </Item>
      </Flex.Item>
      <Flex.Item>
            <div>Curren Item</div>
            <div>ID: 87282GDNM</div>
        </Flex.Item>
        <Flex.Item align="center">
            <div>QRCODEHERE</div>
        </Flex.Item>
      <Flex>
        <Flex.Item>
          <Button type="primary">Login</Button>
        </Flex.Item>
      </Flex>
    </Flex> 

    );
  }
}
export default MyDevicesMain;












   