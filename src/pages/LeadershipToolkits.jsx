import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import './LeadershipToolkits.css';

export default function LeadershipToolkits() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/leadership-toolkits')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError('Failed to fetch resources'));
  }, []);

  return (
    <div>
      <div className="toolkits-background">
        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#4caf50"
            fillOpacity="1"
            d="M0,224L80,224C160,224,320,224,480,197.3C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <motion.div
        className="toolkits-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Leadership Toolkits
        </motion.h1>
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Explore comprehensive toolkits designed to enhance leadership skills and strategies.
        </motion.p>
        {error ? (
          <motion.p
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.p>
        ) : (
          <ul className="toolkits-list">
            {data.map((item) => (
              <ScrollAnimation key={item._id}>
                <motion.li
                  className="toolkit-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.title}</span>
                  <Link to={`/toolkit/${item._id}`} className="redirect-link">
                    <motion.button
                      className="redirect-button"
                      whileHover={{ backgroundColor: '#0056b3', scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.li>
              </ScrollAnimation>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
