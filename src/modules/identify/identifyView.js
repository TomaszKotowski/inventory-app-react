import React from 'react';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Route } from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { NavBar, Icon, Flex, List, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Bind } from 'lodash-decorators';
import QrReader from "../../components/qrCode/reader/qrReader";
import IdentifyResult from '../identifyResult/identifyResult.view';

const Item = List.Item;
const Brief = Item.Brief;

@inject('devicesStore','layoutStore')
@observer
class Identify extends React.Component {
  @observable data;
  
  @Bind()
  onIdentify(idFromQr, data) {
    this.data = data;
    console.log('okon', this.data);
    this.props.history.push(`/app/identify/${this.data[1].id}`);
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Route exact path={match.path} render={() => (
          <Flex direction="column" align="stretch">
            <Flex.Item>
              <Flex.Item align="center">
                <NavBar
                  rightContent={<Icon type="ellipsis" onClick={this.props.layoutStore.handleDrawerDocker} />}>
                  Identify
          </NavBar>
              </Flex.Item>
            </Flex.Item>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Flex.Item align="center" className="device-targed-box2" justify="center;">
              <QrReader {...this.props} identify={true} transfer={false} onIdentify={this.onIdentify} />
            </Flex.Item>
          </Flex> 
        )} />
        <Route path={`${match.path}/:id`} render={() => (
          <IdentifyResult data={this.data} />
        )} />
      </React.Fragment>      
    );
  }
}

export default Identify;
