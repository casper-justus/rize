import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './WebinarArchives.css'; // Import the CSS for styling

export default function WebinarArchives() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/webinar-archives')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError('Failed to fetch resources'));
  }, []);

  // Links to external sites
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        data.map((item) => (
          <motion.div
            key={item._id}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="imgbox">
              <img className="image" src="path/to/your/image.png" alt={item.title} />
            </div>
            <div className="contentbox">
              <h2>{item.title}</h2>
              <div className="media-buttons">
                <button className="media-button" onClick={() => handleButtonClick('https://www.example.com')}>
                  Access Media 1
                </button>
                <button className="media-button" onClick={() => handleButtonClick('https://www.example.com')}>
                  Access Media 2
                </button>
                <button className="media-button" onClick={() => handleButtonClick('https://www.example.com')}>
                  Access Media 3
                </button>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
