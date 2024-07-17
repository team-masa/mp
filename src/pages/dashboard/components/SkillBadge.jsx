import React from 'react';

const SkillBadge = ({ skill }) => (
  <div className="bg-[#282A3A] text-[#C69749] py-2 px-4 rounded-full shadow-md hover:bg-[#C69749] hover:text-[#282A3A] transition duration-300 flex items-center space-x-2">
    <span>{skill.name}</span>
  </div>
);

export default SkillBadge;
