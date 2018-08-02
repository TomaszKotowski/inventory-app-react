import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject, Observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import UserModel from '../../models/UserModel';
import DeviceModel from '../../models/DeviceModel';
import DevicesStore from '../../stores/DevicesStore';
import { NavBar, Icon, Flex, Button, WhiteSpace, List, Tabs } from 'antd-mobile';
import index from '../../stores';
import ScrollContainer from '../scrollContainer/ScrollContainer';


const Item = List.Item;
const Brief = Item.Brief;


@inject('devicesStore','layoutStore')
@observer
class MyDevices extends React.Component {

  
  
       render(){
      
        const { devicesStore } = this.props;
        
      return (
        <div>
          <Flex.Item>
               <NavBar
                   rightContent={<Icon type="ellipsis"  onClick={this.props.layoutStore.handleDrawerDocker} />}className="devices-navbar">
                   My Devices
               </NavBar>
          </Flex.Item>
            {devicesStore.devicesList.map(e =>{
          return (
            <ScrollContainer>
            <Flex.Item >
              <Item arrow="horizontal" multipleLine onClick={(event) => {
                console.log(event.target);
              }}>
                {e.name}
                <Brief>{e.id}</Brief>
              </Item>
            </Flex.Item>
          </ScrollContainer>
          )
        })}
          </div>
      );
    }
}

export default  MyDevices;



