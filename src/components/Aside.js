import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faFire,
  faClipboard,
  faBook
} from "@fortawesome/free-solid-svg-icons";

function Aside() {
  return (
    <aside className="fixed top-0 w-18 h-screen bg-white flex items-center flex-col mt-14 text-gray-700">
      <div className="mt-6 w-full">
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4 text-red-600">
          <FontAwesomeIcon icon={faHome} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faFire} />
          <span className="text-xs">Trending</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faClipboard} />
          <span className="text-xs">Subscriptions</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <FontAwesomeIcon icon={faBook} />
          <span className="text-xs">Library</span>
        </button>
      </div>
    </aside>
  )
}

export default Aside
