import React from 'react';
import JohnImage from '../assets/images/john-doe.jpg';
import JaneImage from '../assets/images/jane-smith.jpg';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

export default function Founders() {
  const teamMembers = [
    {
      name: 'John Warui',
      role: 'Founder',
      image: JohnImage,
      bio: 'John Warui is an aspiring leader and passionate public speaker committed to inspiring change and empowering others. With a natural ability to connect with people and articulate ideas effectively, John has dedicated himself to nurturing leadership qualities in those around him. His engaging talks and thought-provoking perspectives aim to motivate and uplift, fostering an environment of growth and resilience.',
    },
    {
      name: 'Justus Njagi',
      role: 'Co-Founder',
      image: JaneImage,
      bio: 'Justus Njagi is an aspiring tech guru, youth speaker, and creative thinker with a passion for innovation and problem-solving. Known for his ability to merge technology with fresh ideas, Justus inspires others through his engaging talks and unique perspectives. His dynamic approach and dedication to empowering young minds make him a standout figure in the tech community and a role model for future leaders.',
    },
  ];

  return (
    <div>
      {/* Header Section */}
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
            Meet Our Founders
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our dedicated team of founders is committed to driving innovation and leadership.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-primary-600 text-center mb-8">
              Leadership Team
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                   className="mx-auto max-w-full max-h-48 rounded-full shadow-lg mb-4 object-cover"
                   src={member.image}
                   alt={member.name}


                  />
                  <h3 className="text-2xl font-semibold text-primary-600">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
