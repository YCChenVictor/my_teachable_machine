import React from 'react'

function Card() {
  return (
    <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center" >
      <div className="bg-white rounded-lg mt-5">
        <img
          src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
          className="h-40 rounded-md"
          alt=""
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
        <div className="py-5 px-5">
          <span className="font-bold text-gray-800 text-lg">Geek Pizza</span>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-light">
              Size : Regular
            </div>
            <div className="text-2xl text-red-600 font-bold">
              $ 8.00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
