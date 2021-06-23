import React, { Component } from "react"
import ClassRecord from 'components/ClassRecord.js';

// 這邊的 code 要整理一下，之後應該也要改成 hook 的形式

class Class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleChildMenu = this.toggleChildMenu.bind(this);
  }

  toggleChildMenu() {
    this.setState(state => ({
      open: !state.open
    }));
  }
  
  render() {
    return (
      <div className="divide-y bg-white py-8 px-4 rounded-2xl shadow-2xl m-10">
        <h1>
          Class 1
        </h1>
        <div>
          <div>
            <button onClick={this.toggleChildMenu}>
              webcam
            </button>
            <ChildMenu open={this.state.open} />
          </div>
        </div>
      </div>
    )
  }
}

class ChildMenu extends Component {
    render() {
      return (
        <ClassRecord open={this.props.open}/>
      );
    }
}

export default Class
