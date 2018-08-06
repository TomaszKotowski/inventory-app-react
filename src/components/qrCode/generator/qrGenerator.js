import React, { Component } from 'react';
import QrCode from 'QrCode';

class QrGenerator extends Comment {

  qrCodePane;

  componentDidMount() {
    this.qrCodePane = document.getElementById('show-qr');  
    QrCode.toCanvas(this.qrCodePane, 'sample text', (err) => {
      if(err) {
        console.error(err);
      }

      console.log('QrCode generated');
    });
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
