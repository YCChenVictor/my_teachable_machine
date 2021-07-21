import runMobileNet from 'tensorflow/image/imageTf.js';

function Train() {
  return (
    <div className="bg-white py-8 px-4 rounded-2xl shadow-2xl m-10 h-40">
      <h1> Training </h1>
      <button onClick={runMobileNet} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Train Model
      </button>
    </div>
  );
}

export default Train

