import React, { Component } from "react"

class ClassRecord extends Component {

  render() {
    if (this.props.open) {
      return (
        <h1>Hello World</h1>
      )
    } else {
      return (
        <h1>aaa</h1>
      )
    }
  }
}

export default ClassRecord
