import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

const proficiencyLevels = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Expert: 100,
};

const MySkills = () => {
  const [selectedProficiency, setSelectedProficiency] = useState('Beginner'); // State to store the selected proficiency level
  const [skills, setSkills] = useState([
    { name: 'HTML', proficiency: 'Beginner', color: '#FF6B6B' },
    { name: 'JAVASCRIPT', proficiency: 'Beginner', color: '#4ECDC4' },
    { name: 'REACT', proficiency: 'Beginner', color: '#45B7D1' },
    { name: 'NODEJS', proficiency: 'Beginner', color: '#A06CD5' },
  ]);

  const handleProficiencyChange = (proficiency) => {
    setSelectedProficiency(proficiency);
    // Update all skills to have the selected proficiency level
    const updatedSkills = skills.map((skill) => ({
      ...skill,
      proficiency: proficiency,
    }));
    setSkills(updatedSkills);
  };

  return (
    <div id='Skills' className="flex flex-col items-center py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 data-aos="fade-up" className="font-bold text-3xl mb-10 text-yellow-400">MY SKILLS</h1>
      
      {/* Dropdown to select proficiency level */}
      <select
        value={selectedProficiency}
        onChange={(e) => handleProficiencyChange(e.target.value)}
        className="mb-10 p-2 rounded-lg"
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>

      <div data-aos="fade-down" className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => {
                const percentage = isVisible ? proficiencyLevels[skill.proficiency] : 0;
                return (
                  <div className="w-28 h-28 mb-3">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        textSize: '22px',
                        pathColor: skill.color,
                        textColor: skill.color,
                        trailColor: '#1F2937', // Dark trail color
                      })}
                    />
                  </div>
                );
              }}
            </VisibilitySensor>
            <p data-aos="fade-left" className="text-lg font-semibold text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
