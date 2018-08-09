import React, { Component, createRef } from 'react';
import jsQR from "jsqr";
import { Bind } from 'lodash-decorators';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Button, Card, Row, Col } from "antd";
import { Flex } from 'antd-mobile';

@observer
class QrReader extends Component {

  video;
  canvas;
  videoWidth;
  videoHeight;
  scanBind;
  @observable showPopup = false;
  recording;

  constructor() {
    super();
    this.idFromQr = '';
    this.video = createRef();
    this.canvas = document.createElement('canvas');
  }
  
  componentDidMount() {
    this.getCamera();
    this.recording = true;
    this.scanBind = this.scan.bind(this);
    requestAnimationFrame(this.scanBind);
  }
  
  componentWillUnmount() {
    this.stopRecording();
  }
  
  getCamera() {
    const constraints = {
      audio: false,
      video: true
    };
    
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      window.stream = stream;
      this.video.current.srcObject = stream;
      this.recording = true;
      this.video.current.play();
    })
    .catch((error) => {
      console.log('navigator.getUserMedia error: ', error);
      this.recording = false;
    });
  }
  
  stopRecording() {
    if (this.video.current.readyState === 4) {
      this.video.current.srcObject.getTracks().forEach(track => track.stop());
      this.recording = false;
    }
  }

  @Bind
  scan() {
    if (this.recording) {
      if (this.video.current.readyState === 4) {
        this.videoWidth = this.video.current.videoWidth;
        this.videoHeight = this.video.current.videoHeight;
        this.canvas.width = this.videoWidth;
        this.canvas.height = this.videoHeight;
        this.canvas.getContext('2d').drawImage(this.video.current, 0, 0, this.videoWidth, this.videoHeight);
        let imageData = this.canvas.getContext('2d').getImageData(0, 0, this.videoWidth, this.videoHeight);
        const code = jsQR(imageData.data, this.videoWidth, this.videoHeight);
        if (code) {
          this.idFromQr = code.data;
        }
      }
      if (!this.idFromQr) {
        requestAnimationFrame(this.scanBind);
      } else {
        // console.log(this.idFromQr);
        if (this.props.transfer) {
          this.showPopup = true;
          this.stopRecording();
          this.video.current.style.display = 'none';
        } else {
          requestAnimationFrame(this.scanBind);
        }
      }
    }
  }

  // identifyUserToSend() {

  // }

  // @Bind
  // accept() {

  // }

  render() {
    const style = { width: '90%', margin: '5%' };
    const buttonStyle = { width: '100%' };
    const cardStyle = { margin: '30% 0.5rem 0.5rem 0.5rem'}
    console.log(this.props.deviceId);

    return (
      <div>
        <video id='ok' ref={this.video} style={style}></video>
        {
          (this.showPopup && this.props.transfer) &&
          <Card title='Transfer' style={cardStyle}>
            <p>Czy na pewno chcesz przekazać to urządzenie?</p>
            <Row gutter={16}>
              <Col span={12} >
                <Button size='default' style={buttonStyle}>Tak</Button>
              </Col>
              <Col span={12} >
                <Button size='default' onClick={this.props.reject.bind(this)} style={buttonStyle}>Nie</Button>
              </Col>
            </Row>
          </Card>
        }
      </div>
    );
  }
}

export default QrReader;
