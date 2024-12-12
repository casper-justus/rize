import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function Programs() {
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
            Our Programs
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover our comprehensive range of programs designed to empower Africa's next generation of leaders.
          </motion.p>
        </div>
      </motion.div>

      {/* Programs Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Workshops and Seminars',
                description:
                  'Regular events focusing on leadership, entrepreneurship, and civic engagement.',
                link: '/Seminars',
              },
              {
                title: 'Scholarship and Grants',
                description:
                  'Financial support for young leaders pursuing education and innovative projects.',
                link: '/Scholarship',
              },
              {
                title: 'Networking Events',
                description:
                  'Opportunities for young leaders to connect, share ideas, and collaborate.',
                link: '/Events',
              },
              {
                title: 'Community Outreach',
                description:
                  'Initiatives to involve youth in community service and development projects.',
                link: '/Community',
              },
            ].map((program, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <motion.a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-600 font-semibold hover:text-primary-800 py-2 px-4 bg-primary-100 rounded-lg shadow-md inline-block"
                  >
                    Learn More →
                  </motion.a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
