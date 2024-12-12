import React, { useEffect, useState } from 'react';

export default function ResearchPapers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/research-papers')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError('Failed to fetch resources'));
  }, []);

  return (
    <div>
      <h1>Research Papers</h1>
      <p>Discover the latest research papers and academic insights in the field.</p>
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
