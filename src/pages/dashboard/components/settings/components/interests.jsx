import React, { useState} from 'react';

const interestsList = [
    'New In Town', 'Women\'s Rights', 'Artificial Intelligence', 'Ukulele', 'Big Data',
    'Spiritual Awakening', 'Women\'s Fitness', 'Reading', 'Permaculture', 'Poker Tournaments',
    'Arts & Entertainment', 'Nature', 'Tabletop Board Games', 'Writing', 'Songwriting',
    'Cooking', 'Salsa Lessons', 'Bachata', 'Social Movements', 'Social Dancing',
    'Communication Skills', 'Happy Hour', 'Parents', 'Toastmasters', 'Poetry',
    'Swing Dancing', 'Book Club', 'Acoustic Guitar', 'International Travel', 'Philosophy'
  ];

  const Interests = () => {
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

  export default Interests