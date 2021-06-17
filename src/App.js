import React, { Component } from "react"
import {useRoutes} from 'hookrouter';
import Routes from './hooks/Routes'

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      <a href="/"></a>
      <a href="/pages/image_project"></a>
      <a href="/pages/audio_project"></a>
      <a href="/pages/pose_project"></a>
      {routeResult}
    </div>
  );
}

export default App;
