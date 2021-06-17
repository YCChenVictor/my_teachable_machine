import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCircleNotch,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Logo from './images/logo.jpg'

function Header() {
  return (
    <header className="bg-white divide-y ml-18 border-b fixed inset-x-0">
      <div className="flex justify-between items-center h-14 mx-4">
        <div className="-ml-3">
          <a href="/">
            <img src={Logo} className="w-20 h-12" />
          </a>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <input type="text" placeholder="Search" className="border border-gray-400 h-8  px-1 py-2 focus:outline-none focus:border-blue-600 w-3/5" />
          <button className="bg-gray-200 flex items-center justify-center h-8 w-16 border border-gray-400 border-l-0 hover:bg-gray-300">
              <i className="material-icons">search</i>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faVideo} spin />
          </button>
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </button>
          <button className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCog} spin />
          </button>
          <button>
            <div className="h-8 w-8 rounded-full bg-blue-300 overflow-hidden object-cover">
              <img className="object-cover" src="https://images.unsplash.com/photo-1570724061670-86a53c509dee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="" />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
