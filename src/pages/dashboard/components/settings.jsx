// SettingsPage.js
import React, { useState } from 'react';
import { Home, User, Info, Lock, Mail, Shield, Share2, Heart, HelpCircle, ChevronFirst, ChevronLast } from 'lucide-react';
import K from '../../../constants';

const SettingsPage = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeSettingPage, setActiveSettingPage] = useState('/settings/edit-profile');

  const renderSettingContent = () => {
    switch (activeSettingPage) {
      case '/settings/edit-profile':
        return <EditProfileContent />;
      case '/settings/personal-info':
        return <PersonalInfoContent />;
      // Add cases for other settings pages
      default:
        return <div>Select a setting from the sidebar</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} bg-[#3F3D56] text-white transition-all duration-300 p-4`}>
        <nav className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${expanded ? '' : 'hidden'}`}>Settings</h2>
            <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600">
              {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
            </button>
          </div>
          <ul className="flex-1 space-y-2">
            {K.SETTINGS.links.map((item) => (
              <SidebarItem
                key={item.path}
                icon={<item.icon size={20} />}
                text={item.name}
                onClick={() => setActiveSettingPage(item.path)}
                expanded={expanded}
                active={item.path === activeSettingPage}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {renderSettingContent()}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, text, onClick, expanded, active = false }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center p-2 rounded-lg w-full text-left ${active ? 'bg-[#F50081]' : 'hover:bg-gray-700'}`}
      >
        {icon}
        <span className={expanded ? 'ml-3' : 'hidden'}>{text}</span>
      </button>
    </li>
  );
};

const EditProfileContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-[#3F3D56]">Edit profile</h1>
    <p className="mb-4 text-gray-600">This information will appear on your public profile</p>
    <div className="mb-6">
      <div className="w-24 h-24 bg-[#F50081] rounded-full flex items-center justify-center text-white text-4xl font-bold">
        A
      </div>
      <button className="mt-2 px-4 py-2 bg-[#F50081] text-white rounded hover:bg-[#D4007A]">Upload New</button>
      <button className="mt-2 ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Choose from library</button>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Name (required)</label>
      <input type="text" className="w-full p-2 border rounded" defaultValue="Abena Corletey" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Your location</label>
      <p>Accra, Ghana</p>
      <input type="text" className="w-full p-2 border rounded" defaultValue="22 Kwame Nkrumah Ave" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Bio</label>
      <textarea className="w-full p-2 border rounded" rows="4" placeholder="Write a little bit about yourself here"></textarea>
    </div>
  </>
);

const PersonalInfoContent = () => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-[#3F3D56]">Personal Info</h1>
    {/* Add personal info form fields here */}
  </>
);

export default SettingsPage;