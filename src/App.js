import Header from './components/Header.js';
import Card from './components/Card.js';
import Aside from './components/Aside.js';

function App() {
  return (
    <div className="bg-gray-100 font-Roboto antialised">
      <Header />
      <Aside />
      <main className="ml-24 pt-32">
        <div class="border-b-4 border-gray-300 border-opacity-75 pb-12">
          <h3 class="text-xl font-bold">Recommended</h3>
          <div className="mt-4 grid grid-cols-4 row-gap-10 col-gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
