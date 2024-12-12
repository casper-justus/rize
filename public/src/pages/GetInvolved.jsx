import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function GetInvolved() {
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
            Get Involved
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join us in our mission to empower Africa's youth and create positive change.
          </motion.p>
        </div>
      </motion.div>

      {/* Opportunities Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Volunteer',
                description:
                  'Share your skills and experience with young leaders to help them grow and succeed.',
                link: '/Volunteer',
              },
              {
                title: 'Donate',
                description:
                  'Support our programs and initiatives financially to create a lasting impact.',
                link: '/Donate',
              },
              {
                title: 'Partner With Us',
                description:
                  'Collaborate with us on youth development projects and transformative initiatives.',
                link: '/Partner',
              },
              {
                title: 'Become a Mentor',
                description:
                  'Guide and inspire the next generation of leaders by sharing your expertise.',
                link: '/Mentor',
              },
            ].map((opportunity, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.a
                  href={opportunity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{opportunity.description}</p>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
                    Learn More
                  </button>
                </motion.a>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
