import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Plus, X } from 'lucide-react';
import SkillBadge from '../components/SkillBadge';
import { apiAddSkill, apiGetSkills, apiDeleteSkill, apiSearchSkills } from '../../../services/skills';
import Pageloader from '../../../components/pageloader';
import Loader from '../../../components/loader';

const proficiencyLevels = [
  'Beginner', 'Intermediate', 'Advanced', 'Expert'
];

const SkillsContent = () => {
  const [skills, setSkills] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillSuggestions, setSkillSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch skills on mount
  const fetchSkills = async () => {
    try {
      setIsLoading(true);
      const res = await apiGetSkills();
      setSkills(res.data.Skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Handle skill search
  const handleSearchSkills = async (query) => {
    if (query.length > 0) {
      try {
        const res = await apiSearchSkills(query);
        setSkillSuggestions(res.data.suggestions);
      } catch (error) {
        console.log(error);
      }
    } else {
      setSkillSuggestions([]);
    }
  };

  // Handle skill addition
  const handleAddSkill = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency,
      });
      toast.success(res.data.message);
      fetchSkills(); // Refresh skills list after adding a new skill
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the skill");
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  // Handle skill deletion
  const handleRemoveSkill = async (id) => {
    try {
      await apiDeleteSkill(id);
      toast.success("Skill removed successfully");
      fetchSkills(); // Refresh skills list after deleting
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while removing the skill");
    }
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

      {isLoading ? (
        <Pageloader />
      ) : (
        <div>
          {skills.length === 0 ? (
            <p>No skills added yet</p>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {skills.map((skill) => (
                <div key={skill.id} className="relative flex items-center px-4 py-2">
                  <SkillBadge skill={skill} />
                  <button
                    onClick={() => handleRemoveSkill(skill.id)}
                    className="absolute top-0 right-0 bg-[#FF6B6B] text-[#000000] p-2 rounded-full hover:bg-[#FF4C4C] transform hover:scale-110 transition duration-300"
                    aria-label={`Remove ${skill.name}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-30">
          <div className="bg-[#282A3A] p-8 rounded-lg shadow-xl max-w-md mx-auto relative">
            <h2 className="text-2xl font-bold mb-6 text-[#C69749] text-center">Add New Skill</h2>
            <form onSubmit={handleSubmit(handleAddSkill)}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Skill Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  onChange={(e) => handleSearchSkills(e.target.value)}
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                />
                {skillSuggestions.length > 0 && (
                  <ul className="bg-[#282A3A] border border-[#735F32] rounded-lg mt-2 max-h-40 overflow-y-auto">
                    {skillSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.id}
                        onClick={() => {
                          setSelectedSkill(suggestion.name);
                          setSkillSuggestions([]);
                        }}
                        className="py-2 px-4 hover:bg-[#C69749] cursor-pointer"
                      >
                        {suggestion.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Choose level of Proficiency</label>
                <select
                  {...register("proficiency", { required: "Proficiency is required" })}
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                >
                  <option>Select a proficiency level...</option>
                  {proficiencyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
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
                  {isSubmitting ? <Loader /> : "Add Skill"}
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
