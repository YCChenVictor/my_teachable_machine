import Header from './components/Header.js';
import Card from './components/Card.js';
import Aside from './components/Aside.js';

function App() {
  return (
    <div className="bg-gray-100 font-Roboto antialised">
      <Header />
      <Aside />
      <main className="ml-24 pt-16">
        <div className="grid grid-cols-4 row-gap-10 col-gap-2">
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
      </main>
    </div>
  );
}

export default App;
