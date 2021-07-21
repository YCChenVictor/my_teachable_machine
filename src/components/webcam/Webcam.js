import React, { useState } from "react"
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

function WebcamCapture() {

  const [images, setImage] = useState([]);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(images => [...images, {
        id: images.length,
        img: imageSrc
      }])
      console.log(images)
    },
    [webcamRef]
  );

  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      <ul>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.img}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WebcamCapture
