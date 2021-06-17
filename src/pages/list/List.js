import React, { Component } from "react"
import Layout from 'layout/Layout.js';
import Card from 'components/Card.js';

class List extends React.Component {

  renderCard(name, url) {
    return (
      <Card
        projectName={name}
        redirectUrl={url}
      />
    );
  }

  render() {
    return (
      <div className="font-Roboto antialised">
        <Layout />
        <main className="ml-24 pt-16">
          <div className="text-4xl">New Project</div>
          <br />
          <div className="grid grid-cols-4 row-gap-10 col-gap-2">
            {this.renderCard("image project", "/image_project")}
            {this.renderCard("audio project", "/audio_project")}
            {this.renderCard("pose project", "/pose_project")}
          </div>
        </main>
      </div>
    );
  }
}

export default List;
