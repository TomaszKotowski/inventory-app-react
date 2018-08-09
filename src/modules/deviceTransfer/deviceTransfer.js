import React from 'react';
import { observable, reaction, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import QrReader from "../../components/qrCode/reader/qrReader";

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore','layoutStore')
@observer
class DeviceTransfer extends React.Component {
  @observable device = {};
  @observable id = '';

  componentDidMount() {
    reaction(
      () => this.props.devicesStore.devicesList,
      () => {
        this.findById();
      }
    );
  }

  findById() {
    this.id = this.props.match.params.id;
    this.device = this.props.devicesStore.findDeviceById(this.id);
  }

  accept() {

  }

  reject() {
    this.showPopup = false;
    this.video.current.style.display = 'block';
    this.idFromQr = '';
    this.getCamera();
    this.recording = true;
    requestAnimationFrame(this.scanBind);
  }

  render() {
    console.log(this.props.match.params.id);
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
          <QrReader deviceId={this.device.id} transfer={true} reject={this.reject} accept={this.accept}/>
        </Flex.Item>
    </Flex> 
    );
  }
}

export default DeviceTransfer;
