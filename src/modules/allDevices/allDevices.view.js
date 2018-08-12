import React from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import NavBarView from '../../components/navigation/navBar.view'
import { NavBar, Icon, Flex, Button, WhiteSpace, Tabs, List, InputItem } from 'antd-mobile';
import { Row, Col } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import './allDevicesStyle.css';


const Item = List.Item;
const Brief = Item.Brief;


@inject('userStore', 'devicesStore', 'layoutStore')
@observer
class AllDevices extends React.Component {
  
  @observable search;

  constructor(props) {
    super(props);

    const { userStore, history } = this.props;
    if (!userStore.currentUser.isAdmin) {
      history.push('/');
    }
  }

  @observable deviceList = [];

  async componentDidMount() {
    const { devicesStore } = this.props;
    this.deviceList = await devicesStore.getAllDevices();
  }

  @Bind()
  onChangeSearch(value) {
    this.search = value.toLowerCase();
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
    
    const { match, devicesStore } = this.props;

    let devicesList = devicesStore.devicesList;
    if (this.search) {
      devicesList = devicesStore.devicesList.filter(e => e.name.toLowerCase().indexOf(this.search) > -1)
    }

    return (
      <div>
        <Flex.Item className="navbar-sticky">
        <NavBarView title='All Devices' />
        </Flex.Item>

          <Flex align="stretch" direction="row">
          
          <List  className="item-under-sticky">
            <InputItem
              clear
              placeholder="Item name"
              onChange={this.onChangeSearch}
            />
          </List>
        
          
          <Link to={`/app/devices/add`} className="item-under-sticky-cross">
              <Icon type="cross" className="cross" />
            </Link>
            
          </Flex>
          
        <Flex.Item>
          {devicesList.map(e => {
            return (
              <Link to={`/app/devices/${e.id}`} key={e.id}>
              <List >
              <Row>
                <Flex.Item>
              <Col span={4} align="center">
              <img src={e.imageUrl} style={style22}/>
              </Col>
              
              <Col span={20} >
                  <Item arrow="horizontal" multipleLine >
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
        </Flex.Item>
      </div>
    );
  }
}

export default AllDevices;




{/* <Flex.Item>
          {devicesList.map(e => {
            return (
              <Link to={`/app/devices/${e.id}`} key={e.id}>
              <Flex>
              <Flex.Item>
              <img src={e.imageUrl} style={style22}/>
                
                  <Item arrow="horizontal" multipleLine >
                    {e.name}
                    <Brief>{e.id}</Brief>
                  </Item> 
                </Flex.Item>
                </Flex>
              </Link>
            )
          })}
        </Flex.Item> */}