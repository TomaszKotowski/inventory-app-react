import React from 'react';
import ReactDOM from 'react-dom';
import { observable, reaction } from 'mobx';
import { observer, inject } from 'mobx-react';
import 'antd-mobile/dist/antd-mobile.css';
import "./ScrollContainerStyle.css";


class ScrollContainer extends React.Component {
  render() {
    return <div className="scroll-container">{this.props.children}</div>
  }
}

export default  ScrollContainer;