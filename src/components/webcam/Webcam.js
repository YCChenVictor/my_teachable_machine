import React, { Component } from "react"

class Webcam extends Component {

  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.canvas = React.createRef();
    this.takePhoto = this.takePhoto.bind(this); // add this so that it works (gotta take some note)
  }

  takePhoto() {
    const video = this.video.current;
    const canvas = this.canvas.current;
    const context = canvas.getContext('2d');
    canvas.width = 320;
    canvas.height = 100;
    context.drawImage(video, 0, 0, 320, 100);
    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

  componentDidMount() {
    const video = this.video.current;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (error) {
          console.log(`Something went wrong, ${ error }`);
        });
    }
  }

  componentWillUnmount() {
    const video = this.video.current;
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        track.stop();
    }
    video.srcObject = null;
  }

  render() {
    return (
      <div className="camera">
        <video ref={ this.video } width="100%" height="100%" autoPlay>Video stream not available.</video>
        <button onClick={ this.takePhoto }>
          Take photo
        </button>
        <div>
          Add Image:
          <div className="output">
            <canvas ref={ this.canvas }></canvas>
            <img id="photo" />
          </div>
        </div>
      </div>
    )
  }
}

export default Webcam
