// src/pages/dashboard/components/skills.jsx
import React from 'react';

const Skills = () => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-4">Skills</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">Add Skill</button>
      <div>
        {/* Render skill items here */}
        <div className="border-b py-2">Skill 1</div>
        <div className="border-b py-2">Skill 2</div>
      </div>
    </div>
  </div>
);

export default Skills;
