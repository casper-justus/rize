import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function Resources() {
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
            Resources
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Access educational materials, research publications, and toolkits designed to support young leaders.
          </motion.p>
        </div>
      </motion.div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Leadership Toolkit',
                description: 'Essential resources for developing leadership skills',
                link: '/leadership-toolkits'
              },
              {
                title: 'Research Papers',
                description: 'Latest research on youth leadership and development',
                link: '/research-papers'
              },
              {
                title: 'Training Materials',
                description: 'Comprehensive guides and workshop materials',
                link: '/training-materials'
              },
              {
                title: 'Case Studies',
                description: 'Real-world examples of successful youth initiatives',
                link: '/case-studies'
              },
              {
                title: 'Policy Briefs',
                description: 'Analysis of youth-related policies and recommendations',
                link: '/policy-briefs'
              },
              {
                title: 'Webinar Archives',
                description: 'Recorded sessions from expert speakers',
                link: '/webinar-archives'
              }
            ].map((resource, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <button className="text-primary-600 border border-primary-600 py-1 px-3 rounded hover:bg-primary-600 hover:text-white transition-all duration-300">
                      Access →
                    </button>
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

