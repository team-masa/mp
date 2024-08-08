import React from 'react';
import { X } from 'lucide-react';

const Achievements = ({ achievements, handleRemoveAchievement }) => {
  return (
    <section id="Achievement" className="bg-gradient-to-b from-gray-800 to-gray-900 p-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements?.map((achievement) => (
            <div key={achievement.id} className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 relative">
           
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{achievement.award}</h3>
              <p className="text-gray-300 mb-4">{achievement.description}</p>
              <span className="text-gray-400 text-sm">{achievement.date}</span>
              <p className="text-gray-400 text-xs">{achievement.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
