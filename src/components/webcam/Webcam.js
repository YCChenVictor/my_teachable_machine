import React, { Component } from "react"

class Webcam extends Component {
  
  componentDidMount() {
    const video = document.getElementById("video");
    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
          video.srcObject = stream;
      }).catch(function (error) {
          console.log("Something went wrong");
      });
    }
  }

  componentWillUnmount() {
    const video = document.getElementById("video");
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
        <video id="video" width="100%" height="100%" autoPlay>Video stream not available.</video>
        <button id="startbutton">Take photo</button>
      </div>
    )
  }
}

const video = document.getElementById("video")
console.log(video)

export default Webcam
