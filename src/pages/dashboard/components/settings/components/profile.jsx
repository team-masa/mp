import { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  apiGetProfile,
  apiUpdateProfile,
} from "../../../../../services/profile";
import Loader from "../../../../../components/loader";
import Pageloader from "../../../../../components/pageloader";

const Profile = () => {
  const { register, handleSubmit, setValue } = useForm({
    reValidateMode: "onBlur",
    mode: "all",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      setIsLoading(true);
      const res = await apiGetProfile();
      setProfileData(res.data?.profile);

      // Set form values
      setValue("location", res.data?.profile?.location);
      setValue("maritalStatus", res.data?.profile?.maritalStatus);
      setValue("sex", res.data?.profile?.sex);
      setValue("bio", res.data?.profile?.bio);
      setValue("about", res.data?.profile?.about);
      setValue("dateOfBirth", res.data?.profile?.dateOfBirth);
      setValue("contact", res.data?.profile?.contact);
      setValue("languages", res.data?.profile?.languages?.join(", "));
      // setValue("githubLink", res.data?.profile?.githubLink);
      // setValue("linkedinLink", res.data?.profile?.linkedinLink);
      // setValue("twitterLink", res.data?.profile?.twitterLink);

      setProfilePicture(res.data?.profile?.profilePicture);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch profile data");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log("data: ", data);

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
      // formData.append("dateOfBirth", data.dateOfBirth ?? "mm");
      formData.append("contact", data.contact);
      formData.append("resume", data.resume);

      const languagesArray = data.languages
        .split(",")
        .map((lang) => lang.trim());
      languagesArray.forEach((language) => {
        formData.append("languages[]", language);
      });
      // formData.append("githubLink", data.githubLink ?? "mm");
      // formData.append("linkedinLink", data.linkedinLink ?? "mm");
      // formData.append("twitterLink", data.twitterLink ?? "mm");
      console.log(formData.values());
      const res = await apiUpdateProfile(profileData.id, formData);

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
    return <Pageloader />;
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
                src={
                  profilePicture instanceof File
                    ? URL.createObjectURL(profilePicture)
                    : profilePicture
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl">
                {profileData?.user?.firstName?.substring(0, 1)}
                {profileData?.user?.lastName?.substring(0, 1)}
              </span>
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
        <div>
          <label className="block text-[#C69749] mb-2">About</label>
          <textarea
            className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
            rows="5"
            {...register("about")}
            placeholder="Write more details about yourself here"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#C69749] mb-2">Sex</label>
            <select
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              {...register("sex")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>{" "}
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
          <div>
            <label className="block text-[#C69749] mb-2">Location</label>
            <input
              type="text"
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              {...register("location")}
            />
          </div>
          <div>
            {" "}
            <label className="block text-[#C69749] mb-2">Resume</label>
            <input
              type="text"
              id="resume"
              {...register("resume")}
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
            />
          </div>
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
};
export default Profile;
