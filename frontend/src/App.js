import React from 'react';
import CardGrid from './components/CardGrid'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic: The Gathering Cards</h1>
      </header>
      <main>
        <CardGrid />
      </main>
    </div>
  );
}

export default App;
