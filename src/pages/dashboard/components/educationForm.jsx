import { useEffect, useState } from "react";
import { Loader, Plus, X } from "lucide-react";
import {
  apiAddEducation,
  apiDeleteEducation,
  apiGetEducation,
} from "../../../services/education";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { formatDate } from "../../../utils";
import Pageloader from "../../../components/pageloader";

const EducationForm = () => {
  const [educationList, setEducationList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch education data from the backend
  const fetchEducation = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetEducation();
      setEducationList(res.data.education ?? []);
    } catch (error) {
      toast.error("Failed to fetch education data");
      console.error("Fetch Education Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle adding new education entry
  const handleAddEducation = async (data) => {
    setIsSubmitting(true);
    try {
      const formattedData = {
        ...data,
        startDate: format(new Date(data.startDate), "yyyy-MM-dd"),
        endDate: data.endDate
          ? format(new Date(data.endDate), "yyyy-MM-dd")
          : null,
      };
      const res = await apiAddEducation(formattedData);
      console.log("Add Education Response:", res.data); // Debugging line
      toast.success(res.data.message);
      reset();
      setShowAddForm(false);
      fetchEducation(); // Refresh the education list
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
      console.error("Add Education Error:", error); // Debugging line
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle removing an education entry
  const handleRemoveEducation = async (id) => {
    if (!id) {
      toast.error("Invalid education ID");
      return;
    }
    try {
      const res = await apiDeleteEducation(id);
      console.log("Delete Education Response:", res.data); // Debugging line
      toast.success(res.data.message);
      fetchEducation(); // Refresh the education list
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred");
      } else {
        toast.error("An error occurred");
      }
      console.error("Delete Education Error:", error); // Debugging line
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
          <span>{showAddForm ? "Cancel" : "Add New Education"}</span>
        </button>
      </header>

      {showAddForm && (
        <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8 animate-slideDown">
          <h2 className="text-2xl font-bold mb-4 text-[#C69749]">
            Add New Education
          </h2>
          <form onSubmit={handleSubmit(handleAddEducation)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">School Name</label>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("schoolName", { required: true })}
                />
                {errors.schoolName && (
                  <p className="text-red-500">School Name is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <p className="text-red-500">Location is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Program</label>
                <input
                  type="text"
                  placeholder="Program"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("program", { required: true })}
                />
                {errors.program && (
                  <p className="text-red-500">Program is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">
                  Qualification
                </label>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("qualification", { required: true })}
                />
                {errors.qualification && (
                  <p className="text-red-500">Qualification is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Grade</label>
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("grade", { required: true })}
                />
                {errors.grade && (
                  <p className="text-red-500">Grade is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("startDate", { required: true })}
                />
                {errors.startDate && (
                  <p className="text-red-500">Start Date is required</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  {...register("endDate")}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader size={20} className="mr-2" />}
              <span>{isSubmitting ? "Submitting..." : "Add Education"}</span>
            </button>
          </form>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Pageloader />
        </div>
      ) : (
        <div>
          {educationList.length > 0 ? (
            <ul>
              {educationList.map((edu) => (
                <li
                  key={edu.id}
                  className="bg-[#282A3A] p-4 mb-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-bold text-[#C69749]">
                      {edu.schoolName}
                    </h3>
                    <p className="text-lg text-[#E0E0E0]">{edu.program}</p>
                    <p className="text-sm text-[#E0E0E0]">{edu.location}</p>
                    <p className="text-sm text-[#E0E0E0]">
                      {formatDate(edu.startDate)} -{" "}
                      {formatDate(edu.endDate) ?? "Present"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveEducation(edu.id)}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
                  >
                    <X size={18} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-[#E0E0E0]">
              No education entries available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
