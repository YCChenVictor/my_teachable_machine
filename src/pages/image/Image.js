import React, { Component } from "react"
import Layout from 'layout/Layout.js';
import Class from 'components/Class.js';
import Train from 'tensorflow/image/train.js';

function Image () {
  return (
    <div>
      <Layout />
      <main className="ml-24 pt-16">
        <div className="flex">
          <div className="flex flex-col w-1/2">
          <Class test={null} />
          <Class test={null} />
          </div>
          <Train />
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

export default Image;
