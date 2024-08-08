import React, { useState, useEffect } from 'react';
import { Trash2, PlusCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { apiAddAchievement, apiDeleteAchievement, apiGetAchievements } from '../../../services/achievement';

const AchievementsContent = () => {
  const [achievements, setAchievements] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const fetchAchievements = async () => {
    try {
      const res = await apiGetAchievements();
      console.log('Fetched achievements:', res.data); 
      
      if (res.data && Array.isArray(res.data.achievements)) {
        setAchievements(res.data.achievements);
      } else {
        toast.error("No achievements found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch achievements");
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('award', data.award);
    formData.append('description', data.description);
    formData.append('location', data.location);
    formData.append('date', data.date);
    formData.append('nameOfInstitution', data.nameOfInstitution);
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const res = await apiAddAchievement(formData);
      console.log('Added achievement:', res.data); 
      toast.success(res.data.message);
      setAchievements(prevAchievements => [...prevAchievements, { ...data, id: res.data.id, image: URL.createObjectURL(data.image[0]) }]);
      setShowAddForm(false);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add achievement");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteAchievement = async (id) => {
    console.log("Deleting achievement with id:", id); 
    
    if (!id) {
      toast.error("Invalid achievement ID");
      return;
    }

    try {
      const res = await apiDeleteAchievement(id);
      console.log('Deleted achievement:', res.data); 
      
      toast.success(res.data.message);
      setAchievements(prevAchievements => prevAchievements.filter(ach => ach.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete achievement");
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

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
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4 p-4 bg-[#282A3A] rounded" encType="multipart/form-data">
            <input
              type="text"
              placeholder="Award"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('award', { required: true })}
            />
            {errors.award && <p className="text-red-500">Award is required</p>}

            <textarea
              placeholder="Description"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('description', { required: true })}
            />
            {errors.description && <p className="text-red-500">Description is required</p>}

            <input
              type="text"
              placeholder="Location"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('location', { required: true })}
            />
            {errors.location && <p className="text-red-500">Location is required</p>}

            <input
              type="date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('date', { required: true })}
            />
            {errors.date && <p className="text-red-500">Date is required</p>}

            <input
              type="text"
              placeholder="Institution"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('nameOfInstitution', { required: true })}
            />
            {errors.nameOfInstitution && <p className="text-red-500">Institution is required</p>}

            <input
              type="file"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              {...register('image', { required: true })}
            />
            {errors.image && <p className="text-red-500">Image is required</p>}

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
          {achievements.map((ach) => (
            <div key={ach.id} className="border-b border-[#282A3A] py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">{ach.award}</h3>
                <p className="text-sm text-[#e0e0e0]">{ach.description}</p>
                <p className="text-xs text-[#735F32]">{ach.location}</p>
                <p className="text-xs text-[#e0e0e0]">{ach.date}</p>
                <p className="text-xs text-[#e0e0e0]">{ach.nameOfInstitution}</p>
                {ach.image && <img src={ach.image} alt={ach.award} className="mt-2 max-w-xs rounded" />}
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
