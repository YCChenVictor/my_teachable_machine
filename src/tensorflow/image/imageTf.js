import * as tf from "@tensorflow/tfjs"
import * as mobilenet from "@tensorflow-models/mobilenet"

const runMobileNet = async () => {
  const model = await mobilenet.load();
  console.log(model)
}

export default runMobileNet
