import React, { Component, createRef } from 'react';
import jsQR from "jsqr";
import { Bind } from 'lodash-decorators';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Button, Card, Row, Col } from "antd";
import { Flex } from 'antd-mobile';
import IdentifyService from '../../../services/IdentifyService';

@observer
class QrReader extends Component {

  @observable showPopup = false;
  @observable user = '';
  video;
  canvas;
  scanBind;
  recording;

  constructor() {
    super();
    this.idFromQr = '';
    this.video = createRef();
    this.canvas = document.createElement('canvas');
  }

  componentDidMount() {
    // console.log(this.props.deviceId);
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
        this.canvas.width = this.video.current.videoWidth;
        this.canvas.height = this.video.current.videoHeight;
        this.canvas.getContext('2d').drawImage(this.video.current, 0, 0, this.video.current.videoWidth, this.video.current.videoHeight);
        let imageData = this.canvas.getContext('2d').getImageData(0, 0, this.video.current.videoWidth, this.video.current.videoHeight);
        const code = jsQR(imageData.data, this.video.current.videoWidth, this.video.current.videoHeight);
        if (code) {
          this.idFromQr = code.data;
        }
      }
      if (!this.idFromQr) {
        requestAnimationFrame(this.scanBind);
      } else {
        if (this.props.transfer) {
          this.identifyIsItUser();
          if (this.user) {
            this.showPopup = true;
            this.stopRecording();
            this.video.current.style.display = 'none';
          } else {
            this.idFromQr = '';
            requestAnimationFrame(this.scanBind);
          }
        } else if (this.props.identify) {
          this.identifyLogic();
        } else {
          requestAnimationFrame(this.scanBind);
        }
      }
    }
  }

  @Bind()
  async identifyLogic() {
    const { onIdentify } = this.props;
    const data = await IdentifyService.findByIdAndPack(this.idFromQr);
    console.log('ql', data);
    onIdentify(this.idFromQr, data);
  }

  async identifyIsItUser() {
    try {
      const data = await IdentifyService.findById(this.idFromQr);
      if (data.data.objectType === 'user') {
        this.user = `${data.data.user.firstName} ${data.data.user.lastName}`;
        // return true;
      } else {
        // console.log('Błąd to nie jest użytkownik');
        // return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const style = { width: '90%', margin: '5%' };
    const buttonStyle = { width: '100%' };
    const cardStyle = { margin: '30% 0.5rem 0.5rem 0.5rem' }

    // console.log('id', this.props.deviceId);

    return (
      <div>
        <video id='ok' ref={this.video} style={style}></video>
        {
          (this.showPopup && this.props.transfer && this.user) &&
          <Card title='Transfer' style={cardStyle}>
            <p>{`Czy na pewno chcesz przekazać to urządzenie użytkownikowi ${this.user}?`}</p>
            <Row gutter={16}>
              <Col span={12} >
                <Button size='default' onClick={() => this.props.accept(this.idFromQr)} style={buttonStyle}>Tak</Button>
              </Col>
              <Col span={12} >
                <Button size='default' onClick={this.props.reject} style={buttonStyle}>Nie</Button>
              </Col>
            </Row>
          </Card>
        }
      </div>
    );
  }
}

export default QrReader;
