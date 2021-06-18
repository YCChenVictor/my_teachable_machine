const start = function () {
  const video = document.getElementById("video"),
    vendorURL = window.URL || window.webkitURL;

  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
          video.srcObject = stream;
      }).catch(function (error) {
          console.log("Something went wrong");
      });
  }
}
$(function () { start(); });

// const StopWebCam = function () {
//   const stream = video.srcObject;
//   const tracks = stream.getTracks();

//   for (const i = 0; i < tracks.length; i++) {
//       const track = tracks[i];
//       track.stop();
//   }
//   video.srcObject = null;
// }
