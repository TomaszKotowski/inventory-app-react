import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List, Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore','layoutStore')
@observer
class identifyResult extends React.Component {
  
  render() {
      return (

        <Flex direction="column" align="stretch" className="full-height">
            <NavBar
              rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
              Identify
            </NavBar>
            <WhiteSpace size="md" />
            <Flex.Item align="left">
              <div>THIS IS: </div>
          </Flex.Item>
          <Flex.Item align="center" className="bold-text">
              <div>ITEM NAME HERE</div>
          </Flex.Item>
          <Flex.Item align="left">
              <div>IT'S ASSIGNED TO: </div>
          </Flex.Item>
          <Flex.Item align="center" className="bold-text">
              <div>PERSON NAME HERE</div>
          </Flex.Item>
          <Flex>
      </Flex>
    </Flex> 

      )
  }
}


export default identifyResult;