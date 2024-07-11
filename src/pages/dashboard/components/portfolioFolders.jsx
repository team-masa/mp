import React from 'react';
import { Folder } from 'lucide-react';

const PortfolioFolders = () => {
  const folders = [
    { name: 'Web Development', count: 12, size: '45.2 MB' },
    { name: 'Graphic Design', count: 8, size: '1.2 GB' },
    { name: 'Writing Samples', count: 15, size: '3.6 MB' },
    { name: 'Photography', count: 24, size: '8.9 GB' },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Portfolio Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {folders.map((folder, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
              <Folder className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{folder.name}</h3>
                <p className="text-sm text-gray-500">{folder.count} items, {folder.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFolders;