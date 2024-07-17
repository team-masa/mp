// src/pages/dashboard/components/overview.jsx
import React from 'react';

const Overview = () => (
  <div className="p-6 bg-[#000000] bg-opacity-70 text-white h-full">
    <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
    <p className="mb-6">Welcome to your dashboard! Here you can manage your profile, experiences, achievements, skills, and more.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-[#735F32] rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-[#C69749]">Quick Access</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Profile Picture</span>
          </li>
          <li className="flex items-center">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Bio</span>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-[#735F32] rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-[#C69749]">Folders</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Experiences</span>
          </li>
          <li className="flex items-center">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Projects</span>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-[#735F32] rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-[#C69749]">Recent Files</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Profile Picture</span>
          </li>
          <li className="flex items-center">
            <div className="bg-[#C69749] w-8 h-8 rounded-full mr-3"></div>
            <span>Bio</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Overview;
