import React, { useState } from 'react';
import SkillBadge from '../components/SkillBadge';
import { Plus, X } from 'lucide-react';

const predefinedSkills = [
  'JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind CSS', 'HTML', 'Python', 'Django', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'Ruby', 'Rails', 'TypeScript', 'Angular', 'Vue.js', 'MongoDB', 'MySQL', 'PostgreSQL'
];

const SkillsContent = () => {
  const [skills, setSkills] = useState([
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  // Handle adding a new skill
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.find(skill => skill.name === newSkill.trim())) {
      setSkills([...skills, { name: newSkill.trim() }]);
      setNewSkill('');
    }
    setIsModalOpen(false);
  };

  // Handle removing a skill
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill.name !== skillToRemove));
  };

  // Handle adding a predefined skill
  const handleSelectSkill = (skill) => {
    if (skill && !skills.find(s => s.name === skill)) {
      setSkills([...skills, { name: skill }]);
    }
    setSelectedSkill('');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-16 px-6 py-8 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Skills</h1>
        <p className="text-lg text-[#E0E0E0] mb-6">
          Showcase your expertise by listing and updating your skills. Add new skills to enhance your profile.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          <span>Add New Skill</span>
        </button>
      </header>

      {/* Skills List */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {skills.map(skill => (
          <div key={skill.name} className="relative flex items-center px-4 py-2">
            <SkillBadge skill={skill} />
            <button
              onClick={() => handleRemoveSkill(skill.name)}
              className="absolute top-0 right-0 bg-[#FF6B6B] text-[#000000] p-2 rounded-full hover:bg-[#FF4C4C] transform hover:scale-110 transition duration-300"
              aria-label={`Remove ${skill.name}`}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Add Skill Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-30">
          <div className="bg-[#282A3A] p-8 rounded-lg shadow-xl max-w-md mx-auto relative">
            <h2 className="text-2xl font-bold mb-6 text-[#C69749] text-center">Add New Skill</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddSkill(); }}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Skill Name</label>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Or Choose a Predefined Skill</label>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                >
                  <option value="">Select a skill...</option>
                  {predefinedSkills.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => handleSelectSkill(selectedSkill)}
                  disabled={!selectedSkill}
                  className="bg-[#C69749] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 mt-4 w-full disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  Add Predefined Skill
                </button>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#735F32] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#C69749] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300"
                >
                  Add Skill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsContent;
