import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

const Skills = [
  { name: 'HTML', percentage: 25, color: '#FF6B6B' },
  { name: 'JavaScript', percentage: 89, color: '#4ECDC4' },
  { name: 'CSS', percentage: 70, color: '#45B7D1' },
  { name: 'PHP', percentage: 66, color: '#A06CD5' },
  { name: 'WordPress', percentage: 95, color: '#FF8C42' },
  { name: 'jQuery', percentage: 50, color: '#7FDBDA' },
  { name: 'Angular', percentage: 65, color: '#FF5252' },
  { name: 'React', percentage: 45, color: '#61DAFB' }
];

const MySkills = () => {
  return (
    <div id='Skills' className="flex flex-col items-center py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 data-aos="fade-up" className="font-bold text-3xl mb-10 text-yellow-400">MY SKILLS</h1>
      <div data-aos="fade-down" className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {Skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => {
                const percentage = isVisible ? skill.percentage : 0;
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
