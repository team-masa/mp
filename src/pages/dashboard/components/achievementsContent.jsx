import React, { useState, useEffect } from 'react';
import { apiAddAchievement, apiGetAchievements, apiDeleteAchievement } from '../../../services/achievement';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import Pageloader from '../../../components/pageloader';
import { format } from 'date-fns';

const AchievementsContent = () => {
  const [achievements, setAchievements] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await apiGetAchievements();
        setAchievements(response.data.Achievements || []);
      } catch (error) {
        toast.error('Error fetching achievements');
      }
    };

    fetchAchievements();
  }, []);

  const onSubmit = async (data) => {
    try {
      await apiAddAchievement(data);
      toast.success('Achievement added successfully');
      reset();
      setShowAddForm(false);
      const response = await apiGetAchievements();
      setAchievements(response.data.Achievements || []);
    } catch (error) {
      toast.error('Error adding achievement');
    }
  };

  const handleDeleteAchievement = async (id) => {
    try {
      await apiDeleteAchievement(id);
      toast.success('Achievement deleted successfully');
      const response = await apiGetAchievements();
      setAchievements(response.data.Achievements || []);
    } catch (error) {
      toast.error('Error deleting achievement');
    }
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-4 px-4 py-4 max-w-screen-lg rounded-lg">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Achievements</h1>
        <p className="text-lg text-[#E0E0E0] mb-6">Manage and showcase your achievements here.</p>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          <span>{showAddForm ? 'Cancel' : 'Add New Achievement'}</span>
        </button>
      </header>

      {/* Add Achievement Form */}
      {showAddForm && (
        <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Add New Achievement</h2>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            {/* Award */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Award</label>
              <input
                type="text"
                placeholder="Award"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('award', { required: true })}
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Description</label>
              <textarea
                placeholder="Achievement Description"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749] h-24 resize-none overflow-y-auto"
                {...register('description', { required: true })}
              />
            </div>
            {/* Location */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('location', { required: true })}
              />
            </div>
            {/* Date */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Date</label>
              <input
                type="date"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('date', { required: true })}
              />
            </div>
            {/* Institution */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Institution</label>
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('nameOfInstitution', { required: true })}
              />
            </div>
            {/* Image */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Image</label>
              <input
                type="file"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('image', { required: true })}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#C69749] text-[#000000] py-2 px-4 items-center rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? <Pageloader /> : 'Add Achievement'}
            </button>
          </form>
        </div>
      )}

      {/* List of Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="flex flex-col bg-[#282A3A] border border-[#735F32] rounded-lg shadow-lg p-4 h-full">
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-[#C69749]">{achievement.award}</h4>
              <p className="mt-2 break-words text-sm">{achievement.description}</p>
              <p className="mt-1 text-sm">{achievement.location}</p>
              <p className="mt-1 text-sm">{format(new Date(achievement.date), 'MMM dd, yyyy')}</p>
              <p className="mt-1 text-sm">{achievement.nameOfInstitution}</p>
            </div>
            <button
              onClick={() => handleDeleteAchievement(achievement.id)}
              className="mt-4 p-2 bg-red-600 rounded text-white hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsContent;
