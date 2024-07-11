// src/pages/dashboard/components/overview.jsx
import React from 'react';

const Overview = () => (
  <div className="p-6 bg-gray-100 h-full">
    <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
    <p className="mb-6">Welcome to your dashboard! Here you can manage your profile, experiences, achievements, skills, and more.</p>
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Quick Access</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Profile Picture</span>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Bio</span>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Folders</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Experiences</span>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Projects</span>
          </li>
        </ul>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Recent Files</h2>
        <ul>
          <li className="flex items-center mb-2">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Profile Picture</span>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-200 w-8 h-8 rounded-full mr-3"></div>
            <span>Bio</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Overview;
