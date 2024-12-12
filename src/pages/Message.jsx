import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://riseafrica.potoroo-drum.ts.net/path1/api/contact'); // Change to your backend URL
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
        setError(null);
      } catch (err) {
        setError('There was an issue fetching the contacts. Please try again later.');
        console.error(err);
      }
    };

    fetchContacts();
  }, []);

  const backgroundStyle = {
    backgroundImage: `
      linear-gradient(to bottom right, rgba(173, 216, 230, 0.4), rgba(255, 255, 255, 0.7)),
      url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
    zIndex: -1,
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Background Decoration */}
      <div
        style={{
          ...backgroundStyle,
          position: 'absolute',
          inset: '0',
          zIndex: '-1',
        }}
      ></div>

      {/* Hero Section */}
      <motion.div
        style={{
          background: 'linear-gradient(to right, #2c5282, #2a4365)',
          color: 'white',
          padding: '4rem 0',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center', padding: '0 1rem' }}>
          <motion.h1
            style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contact Messages
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Here are the messages we have received from our users.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact List Section */}
      <div style={{ padding: '4rem 0', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 1rem' }}>
          {error ? (
            <p style={{ textAlign: 'center', color: '#e53e3e' }}>{error}</p>
          ) : contacts.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#718096' }}>
              <p style={{ fontSize: '1.125rem' }}>No contact messages available yet.</p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {contacts.map((contact) => (
                <ScrollAnimation key={contact._id} delay={0.1}>
                  <motion.div
                    style={{
                      background: 'white',
                      padding: '1.5rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      border: '1px solid transparent',
                      transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                      borderColor: '#4299e1',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: '#4299e1',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {contact.name}
                    </h3>
                    <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>Email: {contact.email}</p>
                    <p style={{ color: '#718096' }}>Message: {contact.message}</p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
