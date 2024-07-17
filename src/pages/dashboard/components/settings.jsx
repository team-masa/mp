import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { Home, User, Bell, Camera, Globe, Share2, HelpCircle, Search, Phone, Mail, FileText, Briefcase, Star, Book, Award, Settings, ChevronFirst, ChevronLast, ChevronUp, ChevronDown } from 'lucide-react';
import K from '../../../constants';

const SettingsPage = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    if (location.pathname === '/settings') {
      navigate('/settings/profile');
    }

    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize particles.js
      if (particlesContainerRef.current && window.particlesJS) {
        window.particlesJS(particlesContainerRef.current.id, {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab', // Can also be 'bubble' or 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push', // Can also be 'remove'
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [location, navigate]);

  return (
    <div className="flex h-screen relative">
      <div
        ref={particlesContainerRef}
        id="particles-js"
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#000000',
        }}
      ></div>
      <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} bg-[#282A3A] bg-opacity-80 text-white transition-all duration-300 p-4 z-10`}>
        <nav className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl font-bold ${expanded ? '' : 'hidden'}`}>Settings</h2>
            <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-[#735F32] hover:bg-[#C69749]">
              {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
            </button>
          </div>
          <ul className="flex-1 space-y-2">
            {K.SETTINGS.map((item) => (
              <SidebarItem
                key={item.path}
                icon={<item.icon size={20} />}
                text={item.name}
                onClick={() => navigate(item.path)}
                expanded={expanded}
                active={location.pathname === item.path}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 relative z-10">
        <Outlet /> {/* This will render the child routes */}
      </main>
    </div>
  );
};

// SidebarItem component for the settings sidebar
const SidebarItem = ({ icon, text, onClick, expanded, active = false }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center p-2 rounded-lg w-full text-left ${active ? 'bg-[#C69749]' : 'hover:bg-[#735F32]'}`}
      >
        {icon}
        <span className={expanded ? 'ml-3' : 'hidden'}>{text}</span>
      </button>
    </li>
  );
};

// Individual content components for different settings pages


const EditProfileContent = ({ user, onSave }) => {
  const [profilePicture, setProfilePicture] = useState('');
  const [location, setLocation] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [bio, setBio] = useState('');
  const [contact, setContact] = useState('');
  const [languages, setLanguages] = useState(['']);

  useEffect(() => {
    if (user) {
      setProfilePicture(user.profilePicture || '');
      setLocation(user.location || '');
      setMaritalStatus(user.maritalStatus || 'single');
      setBio(user.bio || '');
      setContact(user.contact || '');
      setLanguages(user.languages || ['']);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ profilePicture, location, maritalStatus, bio, contact, languages });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = [...languages];
    newLanguages[index] = value;
    setLanguages(newLanguages);
  };

  const addLanguageField = () => {
    setLanguages([...languages, '']);
  };

  const removeLanguageField = (index) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };

  return (
    <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Edit Profile</h1>
      <p className="mb-4 text-[#C69749]">This information will appear on your public profile.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap items-center mb-6">
          <div className="relative w-24 h-24 bg-[#735F32] rounded-full flex items-center justify-center text-white text-4xl font-bold overflow-hidden mr-6">
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl">A</span>
            )}
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-[#C69749] hover:bg-[#735F32] text-white rounded-full p-2 cursor-pointer transition-colors duration-300"
            >
              <Camera className="w-6 h-6" />
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-[#C69749] mb-2">Bio</label>
            <textarea
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a little bit about yourself here"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[#C69749] mb-2">Location</label>
              <input
                type="text"
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2">Marital Status</label>
              <select
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className="block text-[#C69749] mb-2">Contact</label>
              <input
                type="text"
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[#C69749] mb-2">Languages</label>
              {languages.map((language, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                    value={language}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                  />
                  {languages.length > 1 && (
                    <button
                      type="button"
                      className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => removeLanguageField(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="mt-2 px-4 py-2 bg-[#735F32] text-white rounded hover:bg-[#C69749]"
                onClick={addLanguageField}
              >
                Add Language
              </button>
            </div>
            <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#C69749] hover:bg-[#735F32] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Save Changes
          </button>
        </div>
          </div>
          
        </div>
        
      </form>
    </div>
  );
};
const PersonalInfoContent = () => {
  const [birthdate, setBirthdate] = useState({ month: '', day: '', year: '' });
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [lifeStages, setLifeStages] = useState([]);

  const handleBirthdateChange = (e) => {
    const { name, value } = e.target;
    setBirthdate(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleLifeStageToggle = (stage) => {
    setLifeStages(prev => 
      prev.includes(stage) ? prev.filter(s => s !== stage) : [...prev, stage]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ birthdate, gender, interests, lifeStages });
  };

  return (
    <div className="p-4 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Personal Info</h1>
      <p className="mb-4 text-[#C69749]">
        Completing this information helps with your recommendations. Gender and Birthdate will not appear on your public profile.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-[#C69749] mb-2">Birthdate</label>
            <div className="flex gap-2">
              <select 
                name="month" 
                value={birthdate.month} 
                onChange={handleBirthdateChange}
                className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white"
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <input 
                type="text" 
                name="day" 
                placeholder="Day" 
                value={birthdate.day} 
                onChange={handleBirthdateChange}
                className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-20"
              />
              <input 
                type="text" 
                name="year" 
                placeholder="Year" 
                value={birthdate.year} 
                onChange={handleBirthdateChange}
                className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-24"
              />
            </div>
            <button 
              type="button" 
              onClick={() => setBirthdate({ month: '', day: '', year: '' })} 
              className="text-[#C69749] mt-2"
            >
              Clear
            </button>
          </div>

          <div className="flex-1">
            <label className="block text-[#C69749] mb-2">Gender</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
            >
              <option value="">I'd prefer not to answer</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
              <option value="Genderqueer">Genderqueer</option>
              <option value="Genderfluid">Genderfluid</option>
              <option value="Agender">Agender</option>
              <option value="Two-Spirit">Two-Spirit</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#C69749] mb-2">What are you looking for?</label>
          <div className="flex flex-wrap gap-2">
            {['Practice Hobbies', 'Socialize', 'Make Friends', 'Professionally Network'].map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => handleInterestToggle(interest)}
                className={`px-3 py-1 rounded-full border ${
                  interests.includes(interest) ? 'bg-[#735F32] text-white' : 'text-[#735F32]'
                }`}
              >
                {interest} {interests.includes(interest) ? '-' : '+'}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[#C69749] mb-2">Life stages</label>
          <p className="text-sm text-[#C69749] mb-2">Select what represents you</p>
          <div className="flex flex-wrap gap-2">
            {['Recent Graduate', 'Student', 'New In Town', 'New Empty Nester', 'Newly Retired', 'New Parent', 'Career Change'].map((stage) => (
              <button
                key={stage}
                type="button"
                onClick={() => handleLifeStageToggle(stage)}
                className={`px-3 py-1 rounded-full border ${
                  lifeStages.includes(stage) ? 'bg-[#735F32] text-white' : 'text-[#735F32]'
                }`}
              >
                {stage} {lifeStages.includes(stage) ? '-' : '+'}
              </button>
            ))}
          </div>
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
const AccountManagementContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    // Add logic for updating email
    console.log('Update Email:', email);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Add logic for changing password
      console.log('Change Password:', password);
    } else {
      console.error('Passwords do not match');
    }
  };

  const handleDeleteAccount = () => {
    // Add logic for deleting account
    console.log('Delete Account');
  };

  return (
    <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Account Management</h1>
      <p className="mb-4 text-[#C69749]">Manage your account settings here.</p>

      <form onSubmit={handleUpdateEmail} className="mb-6 space-y-4">
        <div>
          <label className="block text-[#C69749] mb-2">Update Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
            placeholder="New Email"
          />
        </div>
        <button
          type="submit"
          className="bg-[#C69749] hover:bg-[#735F32] text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Update Email
        </button>
      </form>

      <form onSubmit={handleChangePassword} className="mb-6 space-y-4">
        <div>
          <label className="block text-[#C69749] mb-2">Change Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
            placeholder="New Password"
          />
        </div>
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
            placeholder="Confirm New Password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#C69749] hover:bg-[#735F32] text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Change Password
        </button>
      </form>

      <div className="mb-6">
        <button
          onClick={handleDeleteAccount}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-300"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};
const EmailUpdatesContent = () => {
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
const PrivacyContent = () => {
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

const SocialMediaContent = () => {
  const [socialLinks, setSocialLinks] = useState({
    github: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Social media links updated:', socialLinks);
  };

  return (
    <div className="bg-[#282A3A] bg-opacity-80 rounded-lg max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Social Media</h1>
      <p className="mb-6 text-[#C69749]">
        Add your social media below to display links to them on all your Meetup group profiles.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['github', 'facebook', 'instagram', 'twitter', 'linkedin'].map((platform) => (
            <div key={platform}>
              <label htmlFor={platform} className="block text-[#C69749] mb-2 capitalize">
                {platform} URL
              </label>
              <input
                type="url"
                id={platform}
                name={platform}
                value={socialLinks[platform]}
                onChange={handleInputChange}
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                placeholder={`https://${platform}.com/your-profile`}
              />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button 
            type="submit" 
            className="px-6 py-2 bg-[#735F32] text-white rounded hover:bg-[#C69749] transition-colors duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};


const interestsList = [
  'New In Town', 'Women\'s Rights', 'Artificial Intelligence', 'Ukulele', 'Big Data',
  'Spiritual Awakening', 'Women\'s Fitness', 'Reading', 'Permaculture', 'Poker Tournaments',
  'Arts & Entertainment', 'Nature', 'Tabletop Board Games', 'Writing', 'Songwriting',
  'Cooking', 'Salsa Lessons', 'Bachata', 'Social Movements', 'Social Dancing',
  'Communication Skills', 'Happy Hour', 'Parents', 'Toastmasters', 'Poetry',
  'Swing Dancing', 'Book Club', 'Acoustic Guitar', 'International Travel', 'Philosophy'
];

const InterestsContent = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [radius, setRadius] = useState('50 mi');

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="bg-[#282A3A] bg-opacity-80 rounded-lg max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Interests</h1>
      <p className="mb-6 text-[#C69749]">Manage your interests here.</p>

      <div className="mb-6">
        <label className="block text-[#C69749] mb-2">We'll notify you about groups that match your interests within:</label>
        <select
          className="w-48 p-2 border border-[#C69749] rounded bg-[#282A3A] text-white focus:outline-none focus:ring-2 focus:ring-[#735F32]"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        >
          <option value="10 mi">10 mi</option>
          <option value="20 mi">20 mi</option>
          <option value="50 mi">50 mi</option>
          <option value="100 mi">100 mi</option>
        </select>
      </div>

      <div className="mb-6 flex space-x-4">
        <select className="w-48 p-2 border border-[#C69749] rounded bg-[#282A3A] text-white focus:outline-none focus:ring-2 focus:ring-[#735F32]">
          <option value="">Browse by Category</option>
          {/* Add more categories as needed */}
        </select>
        <input
          type="text"
          placeholder="Search for an interest"
          className="flex-1 p-2 border border-[#C69749] rounded bg-[#282A3A] text-white focus:outline-none focus:ring-2 focus:ring-[#735F32]"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {interestsList.map(interest => (
          <button
            key={interest}
            onClick={() => toggleInterest(interest)}
            className={`py-1 px-3 border rounded-full ${
              selectedInterests.includes(interest) 
                ? 'bg-[#735F32] text-white' 
                : 'bg-[#282A3A] text-[#C69749] border-[#C69749]'
            } hover:bg-[#C69749] hover:text-white transition-colors duration-300`}
          >
            {interest}
            {selectedInterests.includes(interest) && ' ×'}
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-[#735F32] text-white rounded hover:bg-[#C69749] transition-colors duration-300">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#C69749] py-2">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#C69749] text-sm">{question}</span>
        {isOpen ? <ChevronUp className="text-[#C69749] w-4 h-4" /> : <ChevronDown className="text-[#C69749] w-4 h-4" />}
      </button>
      {isOpen && <p className="mt-2 text-white text-sm">{answer}</p>}
    </div>
  );
};

const HelpContent = () => {
  const faqs = [
    { question: "How do I create an account?", answer: "Click 'Sign Up' on the homepage, enter your details, and verify your email." },
    { question: "How can I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email." },
    { question: "How do I join a group?", answer: "Navigate to the group's page and click 'Join'. Some groups may require approval." },
  ];

  return (
    <div className="bg-[#282A3A] bg-opacity-80 max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#735F32]">Help & Support</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full p-2 pl-8 text-sm border border-[#C69749] rounded bg-[#282A3A] text-white focus:outline-none focus:ring-1 focus:ring-[#735F32]"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#C69749] w-4 h-4" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#282A3A] p-3 rounded border border-[#C69749]">
          <h2 className="text-lg font-semibold mb-2 text-[#735F32]">Contact Support</h2>
          <div className="flex items-center mb-1">
            <Phone className="mr-2 text-[#C69749] w-4 h-4" />
            <span className="text-white text-sm">+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 text-[#C69749] w-4 h-4" />
            <span className="text-white text-sm">support@example.com</span>
          </div>
        </div>
        <div className="bg-[#282A3A] p-3 rounded border border-[#C69749]">
          <h2 className="text-lg font-semibold mb-2 text-[#735F32]">Documentation</h2>
          <button className="flex items-center text-white text-sm hover:text-[#C69749] transition-colors duration-300">
            <FileText className="mr-2 w-4 h-4" />
            View Documentation
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-[#735F32]">FAQ</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="text-center">
        <p className="text-[#C69749] text-sm mb-2">Still need help?</p>
        <button className="px-4 py-2 bg-[#735F32] text-white text-sm rounded hover:bg-[#C69749] transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
export {
  EditProfileContent,
  PersonalInfoContent,
  AccountManagementContent,
  EmailUpdatesContent,
  PrivacyContent,
  SocialMediaContent,
  InterestsContent,
  HelpContent
};
