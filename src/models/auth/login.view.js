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

const PlaceHolder = ({ className = '', text, ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>{text}</div>
);







const style3 = {
  padding: "10px"
}
const style4 = {
  height: "100vh"
}


@observer
class Login extends React.Component {
  @observable login;
  @observable password;
  @observable dupa;

  


  @Bind()
  onChangeLogin(value) {
    this.login = value;
  }

  @Bind()
  onChangePassword(value) {
    this.password = value;
  }
  
  @Bind()
  send() {

    if(!this.login || !this.password) {
      this.dupa = true;  
    }else {
      //przekierowanie
    }
    
  }
 //dorobic notice bar
 
  render() {
    console.log(this.dupa)
    return(
      <Flex direction="column" align="stretch" style={style4}>
        <Flex.Item flex={1}>
            {this.dupa && <NoticeBar icon={null}>Zle dane</NoticeBar>}
          <List renderHeader={() => 'Login: '}>
            <InputItem
              clear
              placeholder="Your Login"
              onChange={this.onChangeLogin}
            />
          </List>
          <List renderHeader={() => 'Password: '}>
            <InputItem
              clear
              placeholder="Your Password"
              onChange={this.onChangePassword}
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


