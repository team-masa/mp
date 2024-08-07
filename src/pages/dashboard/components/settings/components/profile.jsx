import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { apiGetProfile, apiAddProfile } from "../../../../../services/profile";
import Loader from "../../../../../components/loader";

const Profile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const [profilePicture, setProfilePicture] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      setIsLoading(true);
      const res = await apiGetProfile();
      setProfileData(res.data.profile);

      // Set form values
      setValue("location", res.data.profile.location);
      setValue("maritalStatus", res.data.profile.maritalStatus);
      setValue("sex", res.data.profile.sex);
      setValue("bio", res.data.profile.bio);
      setValue("about", res.data.profile.about);
      setValue("dateOfBirth", res.data.profile.dateOfBirth);
      setValue("contact", res.data.profile.contact);
      setValue("languages", res.data.profile.languages.join(', '));
      setValue("githubLink", res.data.profile.githubLink);
      setValue("linkedinLink", res.data.profile.linkedinLink);
      setValue("twitterLink", res.data.profile.twitterLink);

      setProfilePicture(res.data.profile.profilePicture);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch profile data");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      if (profilePicture instanceof File) {
        formData.append("profilePicture", profilePicture);
      }
      formData.append("location", data.location);
      formData.append("maritalStatus", data.maritalStatus);
      formData.append("sex", data.sex);
      formData.append("bio", data.bio);
      formData.append("about", data.about);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("contact", data.contact);
      formData.append("languages", data.languages.split(',').map(lang => lang.trim()));
      formData.append("githubLink", data.githubLink);
      formData.append("linkedinLink", data.linkedinLink);
      formData.append("twitterLink", data.twitterLink);

      const res = await apiAddProfile(formData);
      console.log(res.data);
      toast.success(res.data.message);
      fetchProfileData(); // Refresh profile data
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Edit Profile</h1>
      <p className="mb-4 text-[#C69749]">
        This information will appear on your public profile.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-wrap items-center mb-6">
          <div className="relative w-24 h-24 bg-[#735F32] rounded-full flex items-center justify-center text-white text-4xl font-bold overflow-hidden mr-6">
            {profilePicture ? (
              <img
                src={profilePicture instanceof File ? URL.createObjectURL(profilePicture) : profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl">A</span>
            )}
            <label
              htmlFor="profilePicture"
              className="absolute bottom-0 right-0 bg-[#C69749] hover:bg-[#735F32] text-white rounded-full p-2 cursor-pointer transition-colors duration-300"
            >
              <Camera className="w-6 h-6" />
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="hidden"
            />
          </div>
          <div className="flex-grow">
            <label className="block text-[#C69749] mb-2">Bio</label>
            <textarea
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              rows="4"
              {...register("bio")}
              placeholder="Write a little bit about yourself here"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[#C69749] mb-2">About</label>
              <textarea
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                rows="4"
                {...register("about")}
                placeholder="Write more details about yourself here"
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2">Location</label>
              <input
                type="text"
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                {...register("location")}
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2">Marital Status</label>
              <select
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                {...register("maritalStatus")}
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="other">Prefer not to say</option>
              </select>
            </div>
            
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-[#C69749] mb-2">Contact</label>
              <input
                type="text"
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                {...register("contact")}
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2">Languages</label>
              <input
                type="text"
                className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
                {...register("languages")}
                placeholder="separate by commas"
              />
            </div>
           
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#C69749] hover:bg-[#735F32] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader /> : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Profile;
