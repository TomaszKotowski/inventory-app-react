import React, { Component } from 'react';
import { Flex, InputItem, List, Button, WhiteSpace, WingBlank, TextareaItem, NoticeBar } from 'antd-mobile';
import { observable, reaction, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import DeviceService from '../../services/DeviceService';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import OfficeService from '../../services/OfficeService';
import PlaceService from '../../services/PlaceService';

@inject('officesStore')
@observer
class AddPlace extends Component {
  @observable name = '';
  @observable selectedPlaceId = '';

  @observable errorMsg;

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
      console.log('okon');
    } else {
      this.errorMsg = 'All fields must be filed in. Please check your input data';
    }
  }

  render() {
    return (
      <div>
        <WhiteSpace size='xl'/>
        <Flex>
          <Flex.Item>
            {this.errorMsg && <NoticeBar mode='closable'>{this.errorMsg}</NoticeBar>}
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'Office'}>
              <Select
                showSearch
                style={{ width: '100%' }}
                onChange={this.onChangeOffice}>
                {/* <Select.Option key='test' value='test'>test</Select.Option> */}
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