import React, { Component } from 'react';
import qrCode from 'qrcode';
import { observable, reaction } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('userStore', 'devicesStore')
@observer
class QrGenerator extends Component {

  componentDidMount() {
    reaction(
      () => this.props.userStore.currentUser.id,
      () => {
        qrCode.toCanvas(document.getElementById('show-qr'), this.props.userStore.currentUser.id, (err) => {
          if(err) {
            console.error(err);
          }
        });
      }
    );
  }

  render() {
    return(
      <div>
        <canvas id='show-qr'></canvas>
      </div>
    );
  }
}

export default QrGenerator;
