
import React, { Component } from 'react';
import { observable, reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Icon, Flex, List } from 'antd-mobile';

  const Item = List.Item;
  const Brief = Item.Brief;

@inject('devicesStore')
@observer
class AllDevices extends Component {

  render() {
    return(
      <div>
        <Flex direction="column" align="stretch">
          {
            this.props.devicesStore.devicesList.map(e => {
              return (
                <Flex.Item key={`flexItem-${e.id}`}>
                  <Item key={`item-${e.id}`} arrow="horizontal" multipleLine>
                    {e.name}
                    <Brief>{e.id}</Brief>
                  </Item>
                </Flex.Item>
              )
          })}
        </Flex>
      </div>
    );
  }
}

export default AllDevices;