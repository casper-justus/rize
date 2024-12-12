import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-primary-800 to-primary-900 text-white"
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
            Empowering Tomorrow's Leaders Today
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
          >
            Cultivating a generation of visionary and ethical young leaders who will drive sustainable development and positive change across Africa.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
          >
            <Link
              to="/programs"
              className="bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Our Programs
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition-colors"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Our Mission</h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                We are dedicated to providing young people with the skills, knowledge, and resources needed to become effective leaders who can drive positive change in their communities.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Empowerment',
                description: 'Equipping youth with essential leadership skills and resources'
              },
              {
                title: 'Innovation',
                description: 'Fostering creativity through mentorship and training'
              },
              {
                title: 'Inclusion',
                description: 'Ensuring equal opportunities for all youth to participate'
              },
              {
                title: 'Advocacy',
                description: 'Championing youth voices in policy-making processes'
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Our Impact</h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                Creating lasting change through leadership development and community engagement.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                stat: '1000+',
                label: 'Youth Leaders Trained'
              },
              {
                stat: '50+',
                label: 'Community Projects'
              },
              {
                stat: '20',
                label: 'African Countries'
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">{item.stat}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <ScrollAnimation>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Join us in our mission to empower the next generation of African leaders.
            </p>
            <Link
              to="/get-involved"
              className="bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

