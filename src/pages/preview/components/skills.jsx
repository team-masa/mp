import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

const Skills = [
  { name: 'HTML', percentage: 25 },
  { name: 'JavaScript', percentage: 89 },
  { name: 'CSS', percentage: 70 },
  { name: 'PHP', percentage: 66 },
  { name: 'WordPress', percentage: 95 },
  { name: 'jQuery', percentage: 50 },
  { name: 'Angular', percentage: 65 },
  { name: 'React', percentage: 45 }
];

const MySkills = () => {
  return (
    <div id='Skills' className="flex flex-col items-center py-10 bg-slate-900">
      <h1 className="font-bold text-2xl mb-10 text-white">MY SKILLS</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {Skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => {
                const percentage = isVisible ? skill.percentage : 0;
                return (
                  <div className="w-24 h-24 mb-3">
                    <CircularProgressbar
                      data-aos="fade-right"
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        textSize: '24px',
                        pathColor: `#f50057`,
                        textColor: '#F87171',
                        trailColor: '#d1d5db',
                      })}
                    />
                  </div>
                );
              }}
            </VisibilitySensor>
            <p data-aos="fade-left" className="text-lg text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
