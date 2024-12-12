import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

export default function CommunityOutreach() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-orange-800 to-orange-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
          >
            Community Outreach
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
          >
            Making a difference in our communities through volunteer work, advocacy, and service.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-900 mb-4">Our Initiatives</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our efforts to impact communities positively and create sustainable change.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Volunteer Opportunities',
                description: 'Participate in local and global service projects.'
              },
              {
                title: 'Community Dialogues',
                description: 'Engage in discussions addressing community needs.'
              },
            
              {
                title: 'Advocacy Campaigns',
                description: 'Raise awareness and advocate for social change.'
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
