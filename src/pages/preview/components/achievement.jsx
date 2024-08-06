import React, { useState, useEffect } from 'react';
import { Loader, Plus, X } from 'lucide-react';

const Achievements = ({achievements}) => {

  return (
    <section id="Achievement" className="bg-slate-800 p-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-[#735F32] rounded-lg shadow-lg p-6 relative">
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition duration-300"
                onClick={() => handleRemoveAchievement(achievement.id)}
              >
                <X size={16} />
              </button>
              <h3 className="text-2xl font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-white mb-4">{achievement.description}</p>
              <span className="text-white text-sm">{achievement.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
