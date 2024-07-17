import React, { useState } from 'react';
import { Trash2, Edit, PlusCircle } from 'lucide-react';

const AchievementsContent = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, award: 'Best Developer', description: 'Awarded for exceptional performance in software development.', date: '2023-05-01', institution: 'Tech University' },
    { id: 2, award: 'Top Innovator', description: 'Recognized for innovative solutions in technology.', date: '2022-11-15', institution: 'Innovate Inc.' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAchievement, setNewAchievement] = useState({ award: '', description: '', date: '', institution: '' });

  const handleAddAchievement = () => {
    if (newAchievement.award && newAchievement.description && newAchievement.date && newAchievement.institution) {
      setAchievements([...achievements, { ...newAchievement, id: Date.now() }]);
      setNewAchievement({ award: '', description: '', date: '', institution: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteAchievement = (id) => {
    setAchievements(achievements.filter(ach => ach.id !== id));
  };

  return (
    <div className="mb-6 text-[#e0e0e0]">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Achievements</h1>
      <p className="mb-4 text-[#C69749]">Showcase your achievements here.</p>
      <div className="bg-[#000000] bg-opacity-70 p-4 rounded-lg shadow-md">
        <button
          className="mb-4 bg-[#C69749] text-[#000000] py-2 px-4 rounded hover:bg-[#735F32] transition duration-300 flex items-center space-x-2"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <PlusCircle size={20} />
          <span>{showAddForm ? 'Cancel' : 'Add Achievement'}</span>
        </button>

        {showAddForm && (
          <div className="mb-4 p-4 bg-[#282A3A] rounded">
            <input
              type="text"
              placeholder="Award"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newAchievement.award}
              onChange={(e) => setNewAchievement({ ...newAchievement, award: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newAchievement.description}
              onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
            />
            <input
              type="date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newAchievement.date}
              onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Institution"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newAchievement.institution}
              onChange={(e) => setNewAchievement({ ...newAchievement, institution: e.target.value })}
            />
            <button
              className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
              onClick={handleAddAchievement}
            >
              Add
            </button>
          </div>
        )}

        <div>
          {achievements.map((ach) => (
            <div key={ach.id} className="border-b border-[#282A3A] py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">{ach.award}</h3>
                <p className="text-sm text-[#e0e0e0]">{ach.description}</p>
                <p className="text-xs text-[#735F32]">{ach.date}</p>
                <p className="text-xs text-[#e0e0e0]">{ach.institution}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-[#C69749] hover:text-[#735F32] transition duration-300"
                  onClick={() => handleDeleteAchievement(ach.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsContent;
