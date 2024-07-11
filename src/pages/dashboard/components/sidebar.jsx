import React from 'react';
import { Link } from 'react-router-dom';
import { Folder, Star, Clock, Trash } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">MyPortfolio</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <Link to="/projects" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Folder className="h-5 w-5 mr-3" />
          Projects
        </Link>
        <Link to="/skills" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Star className="h-5 w-5 mr-3" />
          Skills
        </Link>
        <Link to="/experience" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
          <Clock className="h-5 w-5 mr-3" />
          Experience
        </Link>
        {/* Add more sidebar items as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;