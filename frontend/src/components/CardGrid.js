import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardGrid = () => {
  const [cards, setCards] = useState([]);
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const response = await axios.get('/sets');
        setSets(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchSets();
  }, []);

  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/cards', { set: selectedSet });
      setCards(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <select
          onChange={(e) => setSelectedSet(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a set</option>
          {sets.map((set) => (
            <option key={set.id} value={set.code}>
              {set.name}
            </option>
          ))}
        </select>
        <button
          onClick={fetchCards}
          className="mt-2 p-2 bg-blue-500 text-white rounded"
        >
          Get Cards
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="border p-4 rounded">
            <img src={card.image_url} alt={card.name} className="w-full" />
            <p className="mt-2">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
