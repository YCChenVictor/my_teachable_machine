import React, { Component } from "react"
import WebcamCapture from 'components/webcam/Webcam'

class ClassRecord extends Component {

  render() {
    if (this.props.open) {
      return (
        <div>
          <WebcamCapture />
        </div>
      )
    } else {
      return (
        <h1>close</h1>
      )
    }
  }
}

export default ClassRecord
