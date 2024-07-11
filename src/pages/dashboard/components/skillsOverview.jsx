import React from 'react';
import { Code, Paintbrush, Camera, PenTool } from 'lucide-react';

const SkillsOverview = () => {
  const skills = [
    { name: 'Web Development', percentage: 85, icon: Code, color: 'text-blue-500' },
    { name: 'Graphic Design', percentage: 70, icon: Paintbrush, color: 'text-green-500' },
    { name: 'Photography', percentage: 60, icon: Camera, color: 'text-yellow-500' },
    { name: 'UI/UX Design', percentage: 75, icon: PenTool, color: 'text-purple-500' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Skills Overview</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <skill.icon className={`h-5 w-5 ${skill.color} mr-2`} />
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            <span className="ml-auto text-sm font-medium text-gray-700">{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${skill.color.replace('text', 'bg')}`}
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
      <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        View All Skills
      </button>
    </div>
  );
};

export default SkillsOverview;