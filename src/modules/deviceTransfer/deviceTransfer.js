import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore','layoutStore')
@observer
class DeviceTransfer extends React.Component {
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
      <Link to="/devices">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {this.device.name}
          </Item>
      </Link>
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

export default DeviceTransfer;
