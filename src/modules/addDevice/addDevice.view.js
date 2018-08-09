import React, { Component } from 'react';
import { Flex, InputItem, List, Button, WhiteSpace, WingBlank, TextareaItem, NoticeBar } from 'antd-mobile';
import { observable, reaction, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import DeviceService from '../../services/DeviceService';
import NavBarView from '../../components/navigation/navBar.view';
import './addDeviceStyle.css';
@inject('userStore')
@observer
class AddDevice extends Component {
  @observable name = '';
  @observable belongsTo = '';
  @observable imageUrl = '';
  @observable description = '';
  
  @observable notificationMsg;
  
  componentDidMount() {
    reaction(
      () => this.props.userStore.currentUser.id,
      () => {
        this.belongsTo = this.props.userStore.currentUser.id
      }
    ); 
  }
  
  @Bind
  onChangeName(value) {
    this.name = value;
    
  }
  
  @Bind
  onChangeImageUrl(value) {
    this.imageUrl = value;
  }
  
  @Bind
  onChangeDescription(value) {
    this.description = value;
  }
  
  @Bind
  sendToDatabase() {
    if(this.name.length != 0 &&
      this.imageUrl.length != 0 &&
      this.description.length != 0 &&
      this.props.userStore.currentUser.id) {
        const data = {
          name: this.name,
          belongsToId: this.belongsTo,
          imageUrl: this.imageUrl,
          description: this.description
        }
        DeviceService.postNewDevice(data);
        this.notificationMsg = 'New device added'
      } else {
        this.notificationMsg = 'All fields must be filed in. Please check your input data';
      }
    }
    
    @Bind
    resetNotificationMessage() {
      this.notificationMsg = '';
    }
    
    render() {
      var style = {
        height: "100vh"
      }
      return(
      <Flex direction="column" align="stretch" className="container-flex-item" style={style}>
      
        <Flex.Item flex={1}>
        <NavBarView title="Add device"/>
            <Flex.Item>
              {this.notificationMsg && <NoticeBar mode='closable' onClick={this.resetNotificationMessage}>{this.notificationMsg}</NoticeBar>}
            </Flex.Item>
            <Flex.Item>
              <List renderHeader={() => 'Device name'}>
                <InputItem
                  clear
                  onChange={this.onChangeName}
                />
              </List>
            </Flex.Item>
            <Flex.Item>
              <List renderHeader={() => 'Device description'}>
                <TextareaItem
                  clear
                  rows='6'
                  onChange={this.onChangeDescription}
                />
              </List>
            </Flex.Item>  
            <Flex.Item>
              <List renderHeader={() => 'Device picture URL'}>
                <InputItem
                  clear

                  onChange={this.onChangeImageUrl}
                />
              </List>
            </Flex.Item>
            <WhiteSpace size='xl'/>
      </Flex.Item>
      <Flex>
        <Flex.Item align="end">
              <Button onClick={this.sendToDatabase} type="primary">
                  ADD
              </Button>
        </Flex.Item>
      </Flex>
    </Flex>
    );
  }
}

export default AddDevice; 