import React from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ achievements }) => {
  return (
    <section id="Achievement" className="bg-gradient-to-b from-gray-800 to-gray-900 p-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          {achievements?.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 relative overflow-hidden backdrop-filter backdrop-blur-lg"
            >
              {achievement.image && (
                <motion.img
                  src={achievement.image}
                  alt={achievement.award}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              )}

              <h3 className="text-xl font-semibold text-yellow-400 mb-2 truncate">
                {achievement.award}
              </h3>
              <p className="text-gray-400 text-sm mb-2 truncate">
                {achievement.description}
              </p>
              <span className="text-gray-400 text-sm block">
                {new Date(achievement.date).toLocaleDateString()}
              </span>
              <p className="text-gray-400 text-xs truncate">
                {achievement.nameOfInstitution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;