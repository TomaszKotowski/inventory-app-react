import React, { Component } from 'react';
import jsQR from "jsqr";
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class QrReader extends Component {

  availableCameras;
  video

  componentDidMount() {
    this.findAvailableCameras();
    this.getCamera();
  }
  
  componentWillUnmount() {
    this.stopRecording();
  }

  findAvailableCameras() {
    navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
      this.availableCameras = devices.filter(device => device.kind === 'videoinput');
    })
    .catch((err) => {
      console.log(`${err.name}: ${err.message}`);
    })
  }

  getCamera() {
    this.video = document.getElementById('player');
    const constraints = {
      audio: false,
      video: true
    };
    
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      window.stream = stream;
      this.video.srcObject = stream;
    })
    .catch((error) => {
      console.log('navigator.getUserMedia error: ', error);
    });
  }
  
  stopRecording() {
    this.video.srcObject.getTracks().forEach(track => track.stop());
  }

  render() {
    return (
      <div>
        <video id="player"></video>;
      </div>
    );
  }
}

export default QrReader;


  // componentDidMount() {
  //   // console.log(navigator.mediaDevices.enumerateDevices());
  //   navigator.mediaDevices.getUserMedia({
  //     audio: false,
  //     video: true
  //   })
  //   .then((mediaStream) => {
  //     requestAnimationFrame
  //     const video = document.getElementById('player');
  //     const videoTracks = mediaStream.getVideoTracks();
  //     console.log('Finded devices');
  //     console.log(videoTracks[0]);
  //     video.srcObject = mediaStream;
  //     video.onloadeddata = () => {
  //       video.play();
  //     }
  //   })
  //   .catch((err) => {
  //      console.log(`${err.name}: ${err.message}`);
  //   })
  // }