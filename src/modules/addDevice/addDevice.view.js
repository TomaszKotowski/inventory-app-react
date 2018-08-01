import React, { Component } from 'react';
import { Flex, InputItem, List, Button, WhiteSpace, WingBlank, TextareaItem, NoticeBar } from 'antd-mobile';
import { observable, reaction, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import DeviceService from '../../services/DeviceService';

@inject('userStore')
@observer
class AddDevice extends Component {
  @observable name = '';
  @observable belongsTo = '';
  @observable imageUrl = '';
  @observable description = '';

  @observable errorMsg;

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
      } else {
        this.errorMsg = 'All fields must be filed in. Please check your input data';
      }
  }

  render() {
    return(
      <div>
        <Flex>
          <Flex.Item>
            {this.errorMsg && <NoticeBar mode='closable'>{this.errorMsg}</NoticeBar>}
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'Device name'}>
                <InputItem
                  clear
                  onChange={this.onChangeName}
                />
            </List>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'Device description'}>
                <TextareaItem
                  clear
                  rows='6'
                  onChange={this.onChangeDescription}
                />
            </List>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <List renderHeader={() => 'Device picture URL'}>
              <InputItem
                  clear

                  onChange={this.onChangeImageUrl}
                />
            </List>
          </Flex.Item>
        </Flex>

        <WhiteSpace size='xl'/>
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

export default AddDevice; 