import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Rise Africa Initiative is dedicated to empowering young leaders across the continent.
          </motion.p>
        </div>
      </motion.div>

      {/* Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary-600 mb-4">Our Vision</h2>
              <p className="text-xl text-gray-700">
                To cultivate a generation of visionary and ethical young leaders who will drive sustainable development and positive change across Africa.
              </p>
            </div>
          </ScrollAnimation>

          {/* Core Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Uphold the highest standards of honesty and transparency in all activities.'
              },
              {
                title: 'Excellence',
                description: 'Strive for exceptional performance and continuous improvement.'
              },
              {
                title: 'Collaboration',
                description: 'Work together with partners and communities for shared success.'
              },
              {
                title: 'Diversity',
                description: 'Embrace and celebrate the diverse cultures, perspectives, and talents of African youth.'
              }
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}