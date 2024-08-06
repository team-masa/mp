import React, { useState } from 'react';

const PersonalInfo = () => {
  const [birthdate, setBirthdate] = useState({ dateOfBirth: '' });
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);
  const [lifeStages, setLifeStages] = useState([]);

  const handleBirthdateChange = (e) => {
    setBirthdate({ dateOfBirth: e.target.value });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleInterestToggle = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleLifeStageToggle = (stage) => {
    setLifeStages((prev) =>
      prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      dateOfBirth: birthdate.dateOfBirth,
      gender,
      interests,
      lifeStages,
    };
    console.log(formData);
    // Here you can send formData to your API or backend
  };

  return (
    <div className="p-4 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Personal Info</h1>
      <p className="mb-4 text-[#C69749]">
        Completing this information helps with your recommendations. Gender and Birthdate will not appear on your public profile.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <div>
            <label className="block text-[#C69749] mb-2">Date of Birth</label>
            <input
              type="date"
              value={birthdate.dateOfBirth}
              onChange={handleBirthdateChange}
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
            />
          </div>

          <div>
            <label className="block text-[#C69749] mb-2">Sex</label>
            <select
              value={gender}
              onChange={handleGenderChange}
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
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
                className={`px-3 py-1 rounded-full border ${interests.includes(interest) ? 'bg-[#735F32] text-white' : 'text-[#735F32]'
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
                className={`px-3 py-1 rounded-full border ${lifeStages.includes(stage) ? 'bg-[#735F32] text-white' : 'text-[#735F32]'
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
      </form>{/*  */}
    </div>
  );
};

export default PersonalInfo;
