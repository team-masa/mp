import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { apiAddExperience, apiDeleteExperience, apiGetExperiences } from '../../../services/experience';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ExperienceContent = () => {
  const [experiences, setExperiences] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // Handle adding a new experience
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiAddExperience(data);
      toast.success(res.data.message);
      // Update the experiences state with the new experience
      setExperiences(prevExperiences => [...prevExperiences, { ...data, id: res.data.id }]);
      setShowAddForm(false);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add experience");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle deleting an experience
  const handleDeleteExperience = async (id) => {
    try {
      const res = await apiDeleteExperience(id);
      toast.success(res.data.message);
      setExperiences(prevExperiences => prevExperiences.filter(experience => experience.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete experience");
    }
  };

  // Handle fetching experiences
  const fetchExperiences = async () => {
    try {
      const res = await apiGetExperiences();
      setExperiences(res.data.experience || []); // Ensure experiences is always an array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

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
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4 p-4 bg-[#282A3A] rounded">
            <input
              type="text"
              placeholder="Job Title"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('role', { required: true })}
            />
            {errors.title && <p className="text-red-500">Job Title is required</p>}
            <input
              type="text"
              placeholder="Company"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('companyName', { required: true })}
            />
            {errors.company && <p className="text-red-500">Location is required</p>}
            <input
              type="text"
              placeholder="Company Location"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('location', { required: true })}
            />
            {errors.location && <p className="text-red-500">Company is required</p>}
            <input
              type="date"
              placeholder="Start Date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('startDate', { required: true })}
            />
            {errors.startDate && <p className="text-red-500">Period is required</p>}
            <input
              type="date"
              placeholder="End Date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('endDate', { required: true })}
            />
            {errors.endDate && <p className="text-red-500">endDate is required</p>}
            <textarea
              placeholder="What you did"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('responsibility', { required: true })}
            />
            {errors.description && <p className="text-red-500">Description is required</p>}
            <button 
              type="submit"
              className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add'}
            </button>
          </form>
        )}

        <div>
          {experiences?.map((exp) => (
            <div key={exp.id} className="border-b border-[#282A3A] py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">{exp.role}</h3>
                <p className="text-sm text-[#735F32]">{exp.company}</p>
                <p className="text-sm text-[#735F32]">{exp.companyName}</p>
                <p className="text-sm text-[#735F32]">{exp.location}</p>
                <p className="text-xs text-[#e0e0e0]">{exp.startDate}</p>
                <p className="text-xs text-[#e0e0e0]">{exp.endDate}</p>
                <p className="text-sm mt-2 text-[#e0e0e0]">{exp.responsibility}</p>
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
