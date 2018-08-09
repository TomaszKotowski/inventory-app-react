import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import QrReader from "../../components/qrCode/reader/qrReader";

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore','layoutStore')
@observer
class Identify extends React.Component {
  
  render() {
    return (
      <Flex direction="column" align="stretch">
      <Flex.Item>    
      <Flex.Item align="center">
          <NavBar
            rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
            Identify
          </NavBar>
      </Flex.Item>
      </Flex.Item>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
        <Flex.Item align="center" className="device-targed-box2" justify="center;">
          <QrReader identify={true} transfer={false}/>
        </Flex.Item>
    </Flex> 
    );
  }
}

export default Identify;
