import React, { Component, createRef } from 'react';
import jsQR from "jsqr";
import { Bind } from 'lodash-decorators';
import { observer } from 'mobx-react';

@observer
class QrReader extends Component {

  video;
  canvas;
  videoWidth;
  videoHeight;
  picBind;

  constructor() {
    super();
    this.video = createRef();
    this.canvas = document.createElement('canvas');
  }

  componentDidMount() {
    this.getCamera();
    this.picBind = this.makePic.bind(this);
    requestAnimationFrame(this.picBind);
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
      console.log('jestem');
      window.stream = stream;
      this.video.current.srcObject = stream;
      this.video.current.play();
    })
    .catch((error) => {
      console.log('navigator.getUserMedia error: ', error);
    });
  }
  
  stopRecording() {
    if (this.video.readyState === this.video.HAVE_ENOUGH_DATA) {
      this.video.srcObject.getTracks().forEach(track => track.stop());
    }
  }

  @Bind
  makePic() {
    console.log('zaczynam');
    this.videoWidth = this.video.current.videoWidth;
    this.videoHeight = this.video.current.videoHeight;
    this.canvas.width = this.videoWidth;
    this.canvas.height = this.videoHeight;
    if (this.video.current.readyState === this.video.current.HAVE_ENOUGH_DATA) {
      this.canvas.getContext('2d').drawImage(this.video.current, 0, 0, this.videoWidth, this.videoHeight);
      let imageData = this.canvas.getContext('2d').getImageData(0, 0, this.videoWidth, this.videoHeight);
      const code = jsQR(imageData.data, this.videoWidth, this.videoHeight);
      if (code) {
        console.log('i\'m in');
        console.log(code);
      }
    }
    requestAnimationFrame(this.picBind);
  }

  render() {
    const style = { width: '90%', margin: '5%' };

    return (
      <div>
        <video id='ok' ref={this.video} style={style}></video>
        <button onClick={this.makePic}>ZDJĘCIE!</button>
        {/* <canvas ref={this.canvas}></canvas> */}
      </div>
    );
  }
}

export default QrReader;
