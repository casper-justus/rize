import React, { useEffect, useState } from 'react';

export default function CaseStudies() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/case-studies')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError('Failed to fetch resources'));
  }, []);

  return (
    <div>
      <h1>Case Studies</h1>
      <p>Learn from real-world examples and case studies to gain practical insights.</p>
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
