import React, { Component } from "react"

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <a href={this.props.redirectUrl}>
        <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden border w-full lg:w-11/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
          <div className="w-full flex justify-between p-3">
            <div className="flex">
            </div>
            <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
          </div>
          <img className="w-full bg-cover" src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG" />
          <div className="px-3 pb-2">
            <div className="pt-1">
              <div className="mb-2 text-xl">
                { this.props.projectName }
              </div>
              <div className="mb-2 text-sm">
                Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Card
