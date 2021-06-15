import React from 'react'

function Aside() {
  return (
    <aside className="fixed top-0 w-18 h-screen bg-white flex items-center flex-col mt-14 text-gray-700">
      <button><i className="material-icons">menu</i></button>
      <div className="mt-6 w-full">
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4 text-red-600">
          <i className="material-icons small">home</i>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <i className="material-icons small">local_fire_department</i>
          <span className="text-xs">Trending</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <i className="material-icons small">subscriptions</i>
          <span className="text-xs">Subscriptions</span>
        </button>
        <button className="flex items-center justify-center flex-col hover:bg-gray-200 w-full py-4">
          <i className="material-icons small">video_library</i>
          <span className="text-xs">Library</span>
        </button>
      </div>
    </aside>
  )
}

export default Aside
