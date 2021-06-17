import React, { Component } from "react"
import Layout from 'layout/Layout.js';
import Class from 'components/Class.js';

class Image extends React.Component {

  renderClass() {
    return (
      <Class
        test={null}
      />
    );
  }

  render() {
    return (
      <div>
        <Layout />
        <main className="ml-24 pt-16">
          <div className="flex">
            <div className="flex flex-col w-1/2">
              {this.renderClass()}
              {this.renderClass()}
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-2xl m-10">
              <h1>
                train model
              </h1>
            </div>
            <div className="bg-white py-8 px-4 rounded-2xl shadow-2xl m-10">
              <h1>
                preview model
              </h1>
            </div>
          </div>
        </main>
      </div>  
    );
  }
}

export default Image;
