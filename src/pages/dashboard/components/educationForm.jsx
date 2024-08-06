import React, { useEffect, useState } from 'react';
import { Loader, Plus, X } from 'lucide-react';
import { apiAddEducation, apiDeleteEducation, apiGetEducation } from '../../../services/education';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const EducationForm = () => {
  const [educationList, setEducationList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleAddEducation = async (data) => {
    setIsSubmitting(true);
    try {
      // Format dates before submission
      const formattedData = {
        ...data,
        startDate: format(new Date(data.startDate), 'yyyy-MM-dd'),
        endDate: format(new Date(data.endDate), 'yyyy-MM-dd'),
      };
      const res = await apiAddEducation(formattedData);
      toast.success(res.data.message);
      reset(); // Reset form fields after submission
      setShowAddForm(false);
      fetchEducation(); // Refresh the education list
    } catch (error) {
      if (error.response) {
        // Handle server response error
        toast.error(error.response.data);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  // Handle removing an education
  const handleRemoveEducation = async (id) => {
    if (!id) {
      toast.error("Invalid education ID");
      return;
    }
    try {
      const res = await apiDeleteEducation(id);
      toast.success(res.data.message);
      fetchEducation(); // Refresh the education list
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      } else {
        toast.error("An error occurred");
      }
    }
  };
  //Handle fetching education
  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      setEducationList(res.data.education);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, []);

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-16 px-6 py-8 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Education</h1>
        <p className="text-lg text-[#E0E0E0] mb-6">
          Manage and showcase your educational background here.
        </p>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          <span>{showAddForm ? 'Cancel' : 'Add New Education'}</span>
        </button>
      </header>

      {showAddForm && (
        <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8 animate-slideDown">
          <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Add New Education</h2>
          <form onSubmit={handleSubmit(handleAddEducation)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">School Name</label>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('schoolName', { required: true })}
                />
                {errors.schoolName && <p className="text-red-500">School Name is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('location', { required: true })}
                />
                {errors.location && <p className="text-red-500">Location is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Program</label>
                <input
                  type="text"
                  placeholder="Program"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('program', { required: true })}
                />
                {errors.program && <p className="text-red-500">Program is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Qualification</label>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('qualification', { required: true })}
                />
                {errors.qualification && <p className="text-red-500">Qualification is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Grade</label>
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('grade', { required: true })}
                />
                {errors.grade && <p className="text-red-500">Grade is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Start Date</label>
                <input
                  type="date"
                  placeholder="Start Date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('startDate', { required: true })}
                />
                {errors.startDate && <p className="text-red-500">Start Date is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">End Date</label>
                <input
                  type="date"
                  placeholder="End Date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register('endDate', { required: true })}
                />
                {errors.endDate && <p className="text-red-500">End Date is required</p>}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader size={16} className="mr-2 animate-spin" />
                ) : (
                  <Plus size={16} className="mr-2" />
                )}
                <span>Add Education</span>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {isLoading ? (
          <div className="col-span-full">
            <Loader size={48} className="mx-auto" />
          </div>
        ) : (
          educationList?.map((education) => (
            <div key={education._id} className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-2 text-[#C69749]">{education.schoolName}</h3>
              <p className="text-lg mb-2 text-[#E0E0E0]">{education.location}</p>
              <p className="text-[#C69749]">{education.program}</p>
              <p className="text-[#E0E0E0]">{education.qualification}</p>
              <p className="text-[#C69749]">{education.grade}</p>
              <p className="text-[#E0E0E0]">Start Date: {education.startDate}</p>
              <p className="text-[#E0E0E0]">End Date: {education.endDate}</p>
              <button
                onClick={() => handleRemoveEducation(education._id)}
                className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
              >
                <X size={16} className="inline-block mr-2" />
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EducationForm;
