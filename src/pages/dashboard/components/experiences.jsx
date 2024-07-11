// src/pages/dashboard/components/experiences.jsx
import React from 'react';

const Experiences = () => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-4">Experiences</h2>
    <div className="bg-white p-4 rounded-lg shadow">
      <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded">Add Experience</button>
      <div>
        {/* Render experience items here */}
        <div className="border-b py-2">Experience 1</div>
        <div className="border-b py-2">Experience 2</div>
      </div>
    </div>
  </div>
);

export default Experiences;
