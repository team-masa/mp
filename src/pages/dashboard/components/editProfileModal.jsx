import React, { useState, useEffect } from 'react';

const EditProfileModal = ({ user, onSave, onClose, isOpen }) => {
  const [avatar, setAvatar] = useState(user.avatar);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio || '');
  const [location, setLocation] = useState(user.location || '');
  const [website, setWebsite] = useState(user.website || '');
  const [birthdate, setBirthdate] = useState(user.birthdate || '');

  useEffect(() => {
    if (isOpen) {
      setAvatar(user.avatar);
      setUsername(user.username);
      setBio(user.bio || '');
      setLocation(user.location || '');
      setWebsite(user.website || '');
      setBirthdate(user.birthdate || '');
    }
  }, [isOpen, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ avatar, username, bio, location, website, birthdate });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-purple-900 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-purple-50">
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-purple-900">Edit Profile</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <img src={avatar} alt="Avatar" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500" />
                <label
                  htmlFor="avatar"
                  className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 cursor-pointer transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </label>
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="bio">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="website">
                Website
              </label>
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-purple-800 text-sm font-bold mb-2" htmlFor="birthdate">
                Birth Date
              </label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-purple-900 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Save Changes
              </button>
              <button
                onClick={onClose}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;