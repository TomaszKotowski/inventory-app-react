import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, Button, List, WhiteSpace } from 'antd-mobile';
import { Link, Redirect } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import QrGenerator from '../../components/qrCode/generator/qrGenerator';
import DeviceService from '../../services/DeviceService';
import './deviceViewStyle.css'

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore', 'layoutStore')
@observer
class DeviceView extends React.Component {

  @observable device = {};

  async componentDidMount() {
    this.device = await this.props.devicesStore.findDeviceById(this.props.match.params.id)
  }

  @Bind()
  sendDeviceId() {
    this.props.history.push(`/devices/${this.device.id}/transfer`);
  }

  @Bind()
  toTransfer() {
    const { match } = this.props;
    this.props.history.push(`${match.url}/transfer`);
  }

  render() {
    const { match } = this.props;

    var style = {
      height: "100vh"
    } 
    console.log(match)
    return (
      <Flex direction="column" align="stretch" style={style}>
        <Flex.Item flex={1}>
          <Flex.Item align="center">
            <NavBar
              rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
              My Devices
            </NavBar>
          </Flex.Item>
          <Link to={match.path}>
            <Item arrow="horizontal" multipleLine onClick={() => { }}>
              {this.device.name}
            </Item>
          </Link>
          <WhiteSpace size="lg" />
          <Flex.Item align="center">
            <div>Serial ID: </div>
            <div>{this.device.id}</div>
          </Flex.Item>
        </Flex.Item>
        <Flex.Item align="center">
          <QrGenerator id={this.device.id} />
        </Flex.Item>
        <Flex flex={2}>
          <Flex.Item>
            <Button type="primary" onClick={this.toTransfer}>Transfer</Button>
            {/* <Button type="primary" onClick = {this.sendDeviceId}>Transfer</Button> WAŻNE  */}
          </Flex.Item>
        </Flex>
      </Flex>

    );
  }
}

export default DeviceView;
