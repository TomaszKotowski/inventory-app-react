import React, { Component } from 'react';
import { Flex, InputItem, List, Button, WhiteSpace, NoticeBar } from 'antd-mobile';
import { observable, reaction, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import PlaceService from '../../services/PlaceService';
import NavBarView from '../../components/navigation/navBar.view';

@inject('officesStore')
@observer
class AddPlace extends Component {
  @observable name = '';
  @observable selectedPlaceId = '';

  @observable notificationMsg;

  @Bind
  onChangeName(value) {
    this.name = value;
  }

  @Bind
  onChangeOffice(value) {
    this.selectedPlaceId = value;
  }

  @Bind
  sendToDatabase() {
    if (this.name.length != 0 &&
      this.selectedPlaceId != 0) {
      const data = {
        name: this.name,
        officeId: this.selectedPlaceId
      }
      PlaceService.postNewPlace(data);
      this.notificationMsg = 'New place added';
    } else {
      this.notificationMsg = 'All fields must be filed in. Please check your input data';
    }
  }

  @Bind
  resetNotificationMessage() {
    this.notificationMsg = '';
  }

  render() {
    return (
      <div>
        <NavBarView title="Add place" />
        <WhiteSpace size='xl'/>
        <Flex>
          <Flex.Item>
            {this.notificationMsg && <NoticeBar mode='closable' onClick={this.resetErrMessage}>{this.notificationMsg}</NoticeBar>}
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'Office'}>
              <Select
                showSearch
                style={{ width: '100%' }}
                onChange={this.onChangeOffice}>
                {
                  this.props.officesStore.officesList.map(element => {
                    return( <Select.Option key={element.name} value={element.id}>{element.name}</Select.Option>)
                  })
                }
              </Select>
            </List>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'New place name'}>
              <InputItem
                clear
                onChange={this.onChangeName}
              />
            </List>
          </Flex.Item>
        </Flex>
        <WhiteSpace size='xl' />
        <Flex justify='center' align='end'>
          <Flex.Item>
            <Button onClick={this.sendToDatabase}>
              Send
              </Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default AddPlace; 