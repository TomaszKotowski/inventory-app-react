import React, { Component } from 'react';
import { Flex, InputItem, List, Button, WhiteSpace, WingBlank, TextareaItem, NoticeBar } from 'antd-mobile';
import { observable, reaction, observe } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Bind } from 'lodash-decorators';
import { Link } from 'react-router-dom';
import { Icon, Select } from 'antd';
import DeviceService from '../../services/DeviceService';
import UserService from '../../services/UserService';
import NavBarView from '../../components/navigation/navBar.view';


@inject('officesStore', 'userStore')
@observer
class EditUser extends Component {
  @observable officeList = [];
  @observable name;
  @observable lastName
  @observable officeName

  @Bind
  onChangeName(value) {
    this.name = value;
    console.log(this.name)
  }

  @Bind
  onChangeLastName(value) {
    this.lastName = value;
  }

  @Bind
  onChangeOffice(value) {
    this.officeName = value
  }


  // @Bind
  // onSave({ firstName, lastName, officeName }) {
  //   this.name, this.lastName, this.officeName
  //   UserService.updateUserData(this.props.userStore.currentUser.id, this.name)

  // }

  async componentDidMount() {
    this.officeList = await this.props.officesStore.getAllOffices();
  }

  render() {
    var style = {
      height: "100vh"
    }
    return (
      <Flex direction="column" align="stretch" className="container-flex-item" style={style}>

        <Flex.Item flex={1}>
          <NavBarView title="Edit User" />
          <Flex.Item>
            <Link to="/app/profile">
              <Icon type="arrow-left" style={{ fontSize: 32, color: '#08c', margin: 10 }} />
            </Link>
          </Flex.Item>
          <Flex.Item>
            <List renderHeader={() => 'First Name: '}>
              <InputItem
                clear
                onChange={this.onChangeName}
              />
            </List>
          </Flex.Item>
          <Flex.Item>
            <List renderHeader={() => 'Last Name'}>
              <InputItem
                clear
                onChange={this.onChangeLastName}
              />
            </List>
          </Flex.Item>
          <WhiteSpace size="lg" />
          <Flex.Item>
            <List renderHeader={() => 'Office'}>
              <Select
                showSearch
                style={{ width: '100%' }}
                onChange={this.onChangeOffice}>
                {
                  this.officeList.map(element => {
                    return (
                      <Select.Option
                        key={element.name}
                        value={element.id}>
                        {element.name}
                      </Select.Option>)
                  })
                }
              </Select>
            </List>
          </Flex.Item>

          <WhiteSpace size='xl' />
        </Flex.Item>
        <Flex>
          <Flex.Item align="end">
            <Button type="primary" onClick={this.onSave}>
              Save
              </Button>
          </Flex.Item>
        </Flex>
      </Flex>
    );
  }
}

export default EditUser; 