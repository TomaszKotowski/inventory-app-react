import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List, Button, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import OfficesStore from '../../stores/OfficesStore';

const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore','layoutStore')
@observer
class identifyResult extends React.Component {
  
  @observable office = '';

  async componentDidMount() {
    this.office = await OfficesStore.getOfficeById(this.props.data[1].officeId).name;
  }

  render() {

      return (
        <Flex direction="column" align="stretch" className="full-height">
            <NavBar
              rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
              Identify
            </NavBar>
          <WhiteSpace size="md" />
          {(this.props.data[0] === 'user') &&
          <Flex direction="column">
            <img src={this.props.data[1].avatar} alt=""/>
            <WhiteSpace size="md" />
              <Flex.Item align="Center">
                  <h4>User: </h4>
                  <h2>{`${this.props.data[1].firstName} ${this.props.data[1].lastName}`}</h2>
              </Flex.Item>  
          </Flex>
          }
          {(this.props.data[0] === 'device') &&
          <Flex direction="column">
            <img src={this.props.data[1].imageUrl} alt=""/>
            <WhiteSpace size="md" />
              <Flex.Item align="Center">
                  <h4>User: </h4>
                  <h2>{`${this.props.data[1].name}`}</h2>
              </Flex.Item>
              <Flex.Item align="Center">
                  <h4>User: </h4>
              <h3>{`${this.props.data[1].description}`}</h3>
              </Flex.Item>
          </Flex>
          }

          
    </Flex> 

      )
  }
}


export default identifyResult;