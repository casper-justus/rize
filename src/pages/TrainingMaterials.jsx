import React, { useEffect, useState } from 'react';

export default function TrainingMaterials() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/training-materials')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError('Failed to fetch resources'));
  }, []);

  return (
    <div>
      <h1>Training Materials</h1>
      <p>Access valuable training resources to advance your knowledge and skills.</p>
      {error ? <p>{error}</p> : (
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
