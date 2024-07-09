import React from 'react';
import CardGrid from './components/CardGrid';
import './index.scss';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-center text-2xl">Magic: The Gathering Cards</h1>
      </header>
      <main className="p-4">
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
