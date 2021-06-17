import React from "react";
import List from "pages/list/List";
import Image from "pages/image/Image";
import Audio from "pages/audio/Audio";
import Pose from "pages/pose/Pose";

const Routes = {
  "/": () => <List />,
  "/image_project": () => <Image />,
  "/audio_project": () => <Audio />,
  "/pose_project": () => <Pose />,
};

export default Routes;
