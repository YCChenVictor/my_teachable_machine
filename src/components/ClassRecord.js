import React, { Component } from "react"
import Webcam from 'components/webcam/Webcam'

class ClassRecord extends Component {

  render() {
    if (this.props.open) {
      return (
        <div>
          <Webcam />
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
