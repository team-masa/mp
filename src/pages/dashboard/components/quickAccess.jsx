import React from 'react';
import { FileText, Users, Briefcase } from 'lucide-react';

const QuickAccess = () => {
  return (
    <div className="mt-8">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <FileText className="h-10 w-10 text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Resume</h3>
            <p className="text-sm text-gray-500">Last updated: 2 days ago</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <Users className="h-10 w-10 text-green-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Client Projects</h3>
            <p className="text-sm text-gray-500">5 active projects</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-center">
          <Briefcase className="h-10 w-10 text-purple-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Work Experience</h3>
            <p className="text-sm text-gray-500">3 recent positions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;