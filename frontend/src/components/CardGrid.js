import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardGrid = () => {
  const [cards, setCards] = useState([]);
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch available sets (this is an example, adjust endpoint as needed)
    const fetchSets = async () => {
      try {
        const response = await axios.get('https://api.scryfall.com/sets');
        setSets(response.data.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchSets();
  }, []);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.scryfall.com/cards/search?q=set:${selectedSet}`);
      setCards(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <select onChange={e => setSelectedSet(e.target.value)}>
        {sets.map(set => (
          <option key={set.code} value={set.code}>{set.name}</option>
        ))}
      </select>
      <button onClick={fetchCards}>Get Cards</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="card-grid">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image_uris?.small} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
