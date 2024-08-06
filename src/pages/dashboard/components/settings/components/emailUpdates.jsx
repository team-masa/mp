import React, { useState} from 'react';

const EmailUpdates = () => {
    const [emailPreferences, setEmailPreferences] = useState({
      newsletter: false,
      updates: false,
      promotions: false,
      social: false,
    });
  
    const handlePreferenceChange = (e) => {
      const { name, checked } = e.target;
      setEmailPreferences((prevPreferences) => ({
        ...prevPreferences,
        [name]: checked,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Email Preferences:', emailPreferences);
    };
  
    return (
      <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Email Updates</h1>
        <p className="mb-4 text-[#C69749]">Manage your email notification preferences here.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={emailPreferences.newsletter}
              onChange={handlePreferenceChange}
              className="mr-2"
            />
            <label htmlFor="newsletter" className="text-[#C69749]">Newsletter</label>
          </div>
  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="updates"
              name="updates"
              checked={emailPreferences.updates}
              onChange={handlePreferenceChange}
              className="mr-2"
            />
            <label htmlFor="updates" className="text-[#C69749]">Updates</label>
          </div>
  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="promotions"
              name="promotions"
              checked={emailPreferences.promotions}
              onChange={handlePreferenceChange}
              className="mr-2"
            />
            <label htmlFor="promotions" className="text-[#C69749]">Promotions</label>
          </div>
  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="social"
              name="social"
              checked={emailPreferences.social}
              onChange={handlePreferenceChange}
              className="mr-2"
            />
            <label htmlFor="social" className="text-[#C69749]">Social</label>
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

  export default EmailUpdates