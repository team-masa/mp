import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";
import {
  apiAddExperience,
  apiDeleteExperience,
  apiGetExperiences,
} from "../../../services/experience";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Pageloader from "../../../components/pageloader";
import { formatDate } from "../../../utils";

const ExperienceContent = () => {
  const [experiences, setExperiences] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle adding a new experience
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiAddExperience(data);
      toast.success(res.data.message);
      // Update the experiences state with the new experience
      setExperiences((prevExperiences) => [
        ...prevExperiences,
        { ...data, id: res.data.id },
      ]);
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
      setExperiences((prevExperiences) =>
        prevExperiences.filter((experience) => experience.id !== id)
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete experience");
    }
  };

  // Handle fetching experiences
  const fetchExperiences = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetExperiences();
      setExperiences(res.data.experience ?? []); // Ensure experiences is always an array
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-16 px-6 py-8 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Experiences</h1>
        <p className="text-lg text-[#E0E0E0] mb-6">
          Showcase your experiences here.
        </p>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          <span>{showAddForm ? "Cancel" : "Add New Experience"}</span>
        </button>
      </header>

      {showAddForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-4 p-4 bg-[#282A3A] rounded"
        >
          <input
            type="text"
            placeholder="Job Title"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("role", { required: true })}
          />
          {errors.role && <p className="text-red-500">Job Title is required</p>}

          <input
            type="text"
            placeholder="Company Name"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && (
            <p className="text-red-500">Company Name is required</p>
          )}

          <input
            type="text"
            placeholder="Company Location"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("location", { required: true })}
          />
          {errors.location && (
            <p className="text-red-500">Company Location is required</p>
          )}

          <input
            type="date"
            placeholder="Start Date"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("startDate", { required: true })}
          />
          {errors.startDate && (
            <p className="text-red-500">Start Date is required</p>
          )}

          <input
            type="date"
            placeholder="End Date"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("endDate", { required: true })}
          />
          {errors.endDate && (
            <p className="text-red-500">End Date is required</p>
          )}

          <textarea
            placeholder="Responsibilities"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            {...register("responsibility", { required: true })}
          />
          {errors.responsibility && (
            <p className="text-red-500">Responsibilities are required</p>
          )}

          <button
            type="submit"
            className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </form>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Pageloader />
        </div>
      ) : (
        <div>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-b border-[#282A3A] py-4 flex items-start justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#735F32]">{exp.companyName}</p>
                <p className="text-sm text-[#735F32]">{exp.location}</p>
                <p className="text-xs text-[#e0e0e0]">
                  {formatDate(exp.startDate)}
                </p>
                <p className="text-xs text-[#e0e0e0]">
                  {formatDate(exp.endDate)}
                </p>
                <p className="text-sm mt-2 text-[#e0e0e0]">
                  {exp.responsibility}
                </p>
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
      )}
    </div>
  );
};

export default ExperienceContent;
