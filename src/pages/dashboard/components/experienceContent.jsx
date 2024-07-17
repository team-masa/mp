import React, { useState } from 'react';
import { Trash2, Edit, Check } from 'lucide-react';

const ExperienceContent = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, title: 'Software Developer', company: 'Tech Corp', period: 'Jan 2020 - Present', description: 'Developed various software solutions' },
    { id: 2, title: 'Junior Developer', company: 'Startup Inc', period: 'Jun 2018 - Dec 2019', description: 'Assisted in software development tasks' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newExperience, setNewExperience] = useState({ title: '', company: '', period: '', description: '' });

  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company && newExperience.period) {
      setExperiences([...experiences, { ...newExperience, id: Date.now() }]);
      setNewExperience({ title: '', company: '', period: '', description: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <div className="mb-6 text-[#e0e0e0]">
      <h2 className="text-2xl font-semibold mb-4 text-[#C69749]">Experiences</h2>
      <div className="bg-[#000000] bg-opacity-70 p-4 rounded-lg shadow-md">
        <button 
          className="mb-4 bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Experience'}
        </button>

        {showAddForm && (
          <div className="mb-4 p-4 bg-[#282A3A] rounded">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newExperience.title}
              onChange={(e) => setNewExperience({...newExperience, title: e.target.value})}
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newExperience.company}
              onChange={(e) => setNewExperience({...newExperience, company: e.target.value})}
            />
            <input
              type="text"
              placeholder="Period"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newExperience.period}
              onChange={(e) => setNewExperience({...newExperience, period: e.target.value})}
            />
            <textarea
              placeholder="What you did"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newExperience.description}
              onChange={(e) => setNewExperience({...newExperience, description: e.target.value})}
            />
            <button 
              className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
              onClick={handleAddExperience}
            >
              Add
            </button>
          </div>
        )}

        <div>
          {experiences.map((exp) => (
            <div key={exp.id} className="border-b border-[#282A3A] py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">{exp.title}</h3>
                <p className="text-sm text-[#735F32]">{exp.company}</p>
                <p className="text-xs text-[#e0e0e0]">{exp.period}</p>
                <p className="text-sm mt-2 text-[#e0e0e0]">{exp.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-[#C69749] hover:text-[#735F32] transition duration-300"
                  onClick={() => handleDeleteExperience(exp.id)}
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

export default ExperienceContent;
