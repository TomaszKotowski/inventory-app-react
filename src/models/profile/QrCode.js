import React, { Component } from 'react';
import mobx from 'mobx';
import { Flex, WhiteSpace } from 'antd-mobile';
import default from '../../stores/index';

class QrCode extends Component {
  render() {
    return(
    <Flex justify='center'>
      <img src="" alt=""/>
    </Flex>
    );
  }
}

export default new QrCode();
