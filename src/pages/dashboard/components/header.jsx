import React from 'react';
import { Search, Bell, Edit } from 'lucide-react';

const Header = ({ user, onEditProfile }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center">
        <input
          className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search your portfolio..."
        />
        <button className="ml-4">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        <img
          className="h-8 w-8 rounded-full mr-2"
          src={user.avatar}
          alt={user.name}
        />
        <span className="text-sm font-medium text-gray-700 mr-2">{user.username}</span>
        <button onClick={onEditProfile}>
          <Edit className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;