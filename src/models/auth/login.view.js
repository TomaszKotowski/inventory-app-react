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

const PlaceHolder = ({ className = '', text, ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>{text}</div>
);

const style3 = {
  padding: "10px"
}
const style4 = {
  height: "100vh"
}
const imgStyle = {
  
  display: "block"
}


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

    if(!this.login || !this.password) {
      this.errorMsg = true;  
    }else {
      await AuthService.login(this.login, this.password);
      await AuthService.getProfile();
    }
    
  }
 //dorobic notice bar
 
  render() {
    return(
      <Flex direction="column" align="stretch" style={style4}>
        <Flex.Item flex={1}>
        <WhiteSpace size="xl" />
        <WhiteSpace size="lg" />
        <Flex.Item align="center">
        <img src={require('../../assets/images/logo.png')} align="center"/>
        </Flex.Item>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
            {this.errorMsg  && <NoticeBar icon={null}>Wrong Login/Password. Please try again.</NoticeBar>}
          <List renderHeader={() => 'Login: '}>
            <InputItem
              clear
              placeholder="Your Login"
              onChange={this.onChangeLogin}
            />
          </List>
          <WhiteSpace size="lg" />
          <List renderHeader={() => 'Password: '}>
            <InputItem
              clear
              placeholder="Your Password"
              onChange={this.onChangePassword}
              type = "password"
            />
          </List>
        </Flex.Item>
        <Flex>
          <Flex.Item style={style3}>
            <Button type="primary" onClick={this.send}>Login</Button>
          </Flex.Item>
          <Flex.Item style={style3}>
            <Button type="primary">Facebook</Button>
          </Flex.Item>
        </Flex>
      </Flex>
    );
  }
}

export default Login;
