import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import { Flex, WhiteSpace } from 'antd-mobile';
import { Button, WingBlank } from 'antd-mobile';
import { List, InputItem,} from 'antd-mobile';
import { Bind } from 'lodash-decorators';
import { NoticeBar, Icon } from 'antd-mobile';
import AuthService from '../../services/AuthService';
import AuthData from '../../services/AuthorizationData';
import styles from './loginStyle.css';

const PlaceHolder = ({ className = '', text, ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>{text}</div>
);




@observer
class Login extends React.Component {
  @observable login;
  @observable password;
  @observable errorMsg;

  @Bind()
  onChangeLogin(value) {
    this.login = value;
  }

  @Bind()
  onChangePassword(value) {
    this.password = value;
  }
  
  @Bind()
  async send() {
    if (!this.login || !this.password) {
      this.errorMsg = 'Field cannot be empty';  
    } else {
      try {
        const result = await AuthService.login(this.login, this.password);
        await AuthService.getProfile();
      } catch(error) {
        console.log(error.message);
        this.errorMsg = error.message;
      }
    }
  }
  //dorobic notice bar
  
  render() {
    return(
      <Flex direction="column" align="stretch" className="container-flex-logo">
        <Flex.Item flex={1}>    
        <Flex.Item align="center" className = "logo-item">
        <img src={require('../../assets/images/logo.png')} align="center"/>
        </Flex.Item>
            {this.errorMsg  && <NoticeBar icon={null}>{this.errorMsg}</NoticeBar>}
          <List renderHeader={() => 'Login: '}>
            <InputItem
              clear
              placeholder="Your Login"
              onChange={this.onChangeLogin}
              className="input-item"
            />
          </List>
          <List renderHeader={() => 'Password: '}>
            <InputItem
              clear
              placeholder="Your Password"
              onChange={this.onChangePassword}
              type = "password"
              className="input-item"
            />
          </List>
        </Flex.Item>
        <Flex>
          <Flex.Item className="button-item">
            <Button type="primary" onClick={this.send}>Login</Button>
          </Flex.Item>
          <Flex.Item className="button-item2">
            <Button type="primary">Facebook</Button>
          </Flex.Item>
        </Flex>
      </Flex>
    );
  }
}

export default Login;
