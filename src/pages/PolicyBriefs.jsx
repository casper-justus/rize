import React, { useEffect, useState } from 'react';

export default function PolicyBriefs() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/policy-briefs')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError('Failed to fetch resources'));
  }, []);

  return (
    <div>
      <h1>Policy Briefs</h1>
      <p>Stay informed with concise and impactful policy briefs.</p>
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
