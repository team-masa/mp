import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar.jsx';
import Header from './header.jsx';
import QuickAccess from './quickAccess.jsx';
import PortfolioFolders from './portfolioFolders.jsx';
import RecentItems from './recentItems.jsx';
import SkillsOverview from './skillsOverview.jsx';
import EditProfileModal from './editProfileModal.jsx';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johnd',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    skills: [
      { name: 'Web Development', percentage: 85 },
      { name: 'Graphic Design', percentage: 70 },
      { name: 'UI/UX Design', percentage: 75 },
    ],
    recentItems: [
      { name: 'Portfolio Website', type: 'code', date: 'May 15, 2023' },
      { name: 'Project Proposal', type: 'document', date: 'May 12, 2023' },
    ],
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditProfile = (updatedUser) => {
    setUser({ ...user, ...updatedUser });
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} onEditProfile={() => setIsEditModalOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Welcome, {user.name}</h3>
            <p className="mb-6">Here you can manage your profile, experiences, achievements, skills, and more.</p>
            <QuickAccess items={user.recentItems.slice(0, 3)} />
            <PortfolioFolders />
            <div className="mt-8 flex flex-wrap">
              <div className="w-full lg:w-2/3 pr-4">
                <RecentItems items={user.recentItems} />
              </div>
              <div className="w-full lg:w-1/3 pl-4">
                <SkillsOverview skills={user.skills} />
              </div>
            </div>
          </div>
        </main>
      </div>
      {isEditModalOpen && (
        <EditProfileModal
          user={user}
          onSave={handleEditProfile}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;