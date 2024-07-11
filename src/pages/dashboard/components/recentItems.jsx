import React from 'react';
import { FileText, Image, Video, Code } from 'lucide-react';

const RecentItems = () => {
  const items = [
    { name: 'Portfolio Website Redesign', type: 'code', date: 'May 15, 2023', members: 2 },
    { name: 'Client Project Proposal', type: 'document', date: 'May 12, 2023', members: 3 },
    { name: 'Photography Showcase', type: 'image', date: 'May 10, 2023', members: 1 },
    { name: 'Product Demo Video', type: 'video', date: 'May 8, 2023', members: 4 },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'document': return FileText;
      case 'image': return Image;
      case 'video': return Video;
      case 'code': return Code;
      default: return FileText;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-gray-700 text-lg font-semibold mb-4">Recent Portfolio Items</h2>
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="pb-3 font-medium">Name</th>
            <th className="pb-3 font-medium">Last Modified</th>
            <th className="pb-3 font-medium">Members</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const Icon = getIcon(item.type);
            return (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3">
                  <div className="flex items-center">
                    <Icon className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </td>
                <td className="py-3">
                  <div className="flex -space-x-2">
                    {[...Array(item.members)].map((_, i) => (
                      <img
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white"
                        src={`https://randomuser.me/api/portraits/men/${i + 1}.jpg`}
                        alt={`Member ${i + 1}`}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
        View All Items
      </button>
    </div>
  );
};

export default RecentItems;