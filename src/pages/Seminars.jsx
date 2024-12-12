import React from 'react';
import { motion } from 'framer-motion';

export default function Workshops() {
  return (
    <div className="bg-gray-50 py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600">Workshops & Seminars</h1>
          <p className="text-lg text-gray-600 mt-2">
            Join us for a series of impactful workshops and seminars designed to inspire, educate, and empower individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Leadership Development Workshops',
              description: 'Enhance your leadership skills and learn practical strategies for effective team management and decision-making.',
              image: 'leadership-workshop.jpg', // Replace with your image path
            },
            {
              title: 'Entrepreneurship Seminars',
              description: 'Gain insights from experienced entrepreneurs and learn how to turn innovative ideas into successful ventures.',
              image: 'entrepreneur-seminar.jpg', // Replace with your image path
            },
            {
              title: 'Civic Engagement Workshops',
              description: 'Understand the importance of active community participation and how to make a difference in society.',
              image: 'civic-engagement.jpg', // Replace with your image path
            },
            {
              title: 'Networking Events',
              description: 'Connect with like-minded individuals, share experiences, and build valuable professional relationships.',
              image: 'networking-event.jpg', // Replace with your image path
            },
            {
              title: 'Skill Enhancement Workshops',
              description: 'Practical sessions designed to equip participants with essential life and professional skills.',
              image: 'skill-enhancement.jpg', // Replace with your image path
            },
            {
              title: 'Youth Leadership Conferences',
              description: 'Annual conferences focused on youth leadership, providing platforms for idea exchange and mentorship.',
              image: 'youth-conference.jpg', // Replace with your image path
            },
            {
              title: 'Volunteer Training Programs',
              description: 'Prepare and empower volunteers to make a significant impact through training programs.',
              image: 'volunteer-training.jpg', // Replace with your image path
            },
            {
              title: 'Innovation Workshops',
              description: 'Hands-on workshops aimed at fostering creativity and innovative thinking.',
              image: 'innovation-workshop.jpg', // Replace with your image path
            }
          ].map((workshop, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={workshop.image} alt={workshop.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold text-primary-600 mb-2">{workshop.title}</h3>
              <p className="text-gray-700 mb-4">{workshop.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

