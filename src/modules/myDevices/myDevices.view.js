import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List } from 'antd-mobile';
import DeviceService from '../../services/DeviceService';
import NavBarView from '../../components/navigation/navBar.view';
import AuthService from '../../services/AuthService'
import { Row, Col } from 'antd';

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore', 'layoutStore', 'userStore')
@observer
class MyDevices extends React.Component {
  @observable myDevicesList = [];
  

  componentDidMount() {
    const { currentUser } = this.props.userStore;

    if (currentUser.id) {
      this.findDevices(currentUser.id);
    }
    
    reaction(
      () => this.props.userStore.currentUser.id,
      (id) => {
        this.findDevices(id);
      }
    );
  }

  componentWillReceiveProps(props) {
    const { currentUser } = props.userStore;

    if (currentUser.id) {
      this.findDevices(currentUser.id);
    }
  }
  
  findDevices(id) {
    console.log('asdf', id);
    DeviceService.findDevicesAllocatedToUser(id)
      .then((value) => {
        this.myDevicesList = value.data;
        this.props.userStore.currentUser.devices = value.data;
        console.log(value.data);
      })
  }

  render() {
    var style22 = {
      width: "50px",
      height: "50px",
      display: "block",
      margin: "16px auto",
      borderRadius: "5px",
      border: "1px solid black"
    }
    const { devicesStore, match} = this.props;
    
    return (
      <div>
        <NavBarView title="My devices" />
          {this.myDevicesList.map(e =>{
            return (
              <Link to={`${match.path}/${e.id}`} key={e.id}>
              <List>
              <Row>
                <Flex.Item key={`flexItem-${e.id}`}>
              <Col span={4} align="center">
              <img src={e.imageUrl} style={style22}/>
              </Col>
              
              <Col span={20} >
                  <Item key={`item-${e.id}`} arrow="horizontal" multipleLine >
                    {e.name}
                    <Brief>{e.id}</Brief>
                  </Item> 
              </Col>
              </Flex.Item>
                </Row>
                </List>
              </Link>
            )
          })}
      </div>
    );
  }
}

export default  MyDevices;



