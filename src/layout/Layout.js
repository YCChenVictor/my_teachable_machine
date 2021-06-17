import React, { Component } from "react"
import Header from 'components/Header.js';
import Aside from 'components/Aside.js';

class Layout extends React.Component {

  render() {
    return (
      <div className="font-Roboto antialised">
        <Header />
        <Aside />
      </div>
    );
  }
}

export default Layout;
