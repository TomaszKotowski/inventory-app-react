import React from 'react';
import { observable, reaction, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import QrReader from "../../components/qrCode/reader/qrReader";
import DevicesStore from '../../stores/DevicesStore';
import DeviceService from '../../services/DeviceService';

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore', 'layoutStore')
@observer
class DeviceTransfer extends React.Component {
  @observable device = {};
  @observable id = '';

  componentDidMount() {
    // console.log('ID: ', this.props.match.params.id);
    if (this.device) {
      this.findById();
    }

    reaction(
      () => this.props.devicesStore.devicesList,
      () => {
        this.findById();
      }
    );
  }

  @action
  async findById() {
    this.device = await DevicesStore.findDeviceById(this.props.match.params.id);
    this.id = this.device.id;
  }

  accept() {
    if (this.props.deviceId !== null) {
      DeviceService.changeOwner(this.props.deviceId, this.idFromQr);
    }
    // DevicesService.changeOwner('61cf7c69-2ed0-4d76-9db8-dd4cdc986078', this.idFromQr);
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
    const { match } = this.props;
    return (
      <Flex direction="column" align="stretch">
        <Flex.Item>
          <Flex.Item align="center">
            <NavBar
              rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
              My Devices
          </NavBar>
          </Flex.Item>
      </Flex.Item>
      <Flex.Item>
        <Link to={match.path}>
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            {this.device.name}
          </Item>
      </Link>
      </Flex.Item>
      <Flex.Item align="center" className="device-targed-box1">
            <div>CHOOSE TARGET</div>
        </Flex.Item>
        <Flex.Item align="center" className="device-targed-box2" justify="center;">
          <QrReader deviceId={this.id} transfer={true} identify={false} reject={this.reject} accept={this.accept} />
        </Flex.Item>
      </Flex>
    );
  }
}

export default DeviceTransfer;
