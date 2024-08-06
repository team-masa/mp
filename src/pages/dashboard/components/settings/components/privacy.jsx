import React, { useState} from 'react';


const Privacy = () => {
    const [privacySettings, setPrivacySettings] = useState({
      profileVisibility: 'public',
      dataSharing: false,
      searchEngineIndexing: false,
    });
  
    const handleSettingChange = (e) => {
      const { name, value, type, checked } = e.target;
      setPrivacySettings((prevSettings) => ({
        ...prevSettings,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Privacy Settings:', privacySettings);
    };
  
    return (
      <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Privacy Settings</h1>
        <p className="mb-4 text-[#C69749]">Manage your privacy settings here.</p>
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <label className="block text-[#C69749] mb-2">Profile Visibility</label>
            <select
              name="profileVisibility"
              value={privacySettings.profileVisibility}
              onChange={handleSettingChange}
              className="border rounded p-2 w-full"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="dataSharing"
              name="dataSharing"
              checked={privacySettings.dataSharing}
              onChange={handleSettingChange}
              className="mr-2"
            />
            <label htmlFor="dataSharing" className="text-[#C69749]">Allow data sharing with third-party services</label>
          </div>
  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="searchEngineIndexing"
              name="searchEngineIndexing"
              checked={privacySettings.searchEngineIndexing}
              onChange={handleSettingChange}
              className="mr-2"
            />
            <label htmlFor="searchEngineIndexing" className="text-[#C69749]">Allow search engines to index my profile</label>
          </div>
  
          <button
            type="submit"
            className="bg-[#C69749] hover:bg-[#735F32] text-white px-4 py-2 rounded transition-colors duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  };

  export default Privacy