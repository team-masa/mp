import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { apiGetProfile, apiUpdateProfile } from '../../../../../services/profile';
import Loader from '../../../../../components/loader';
import { toast } from 'react-toastify';

const Socials = () => {
  const [socialLinks, setSocialLinks] = useState({
    github: '',
    twitter: '',
    linkedin: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        setIsLoading(true);
        const res = await apiGetProfile();
        const { githubLink, twitterLink, linkedinLink } = res.data;
        setSocialLinks({ github: githubLink, twitter: twitterLink, linkedin: linkedinLink });
        setValue('githubLink', githubLink);
        setValue('twitterLink', twitterLink);
        setValue('linkedinLink', linkedinLink);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load social links');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocialLinks();
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const res = await apiUpdateProfile({
        githubLink: data.githubLink,
        twitterLink: data.twitterLink,
        linkedinLink: data.linkedinLink,
      });
      setSocialLinks(data);
      toast.success('Social links updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update social links');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#282A3A] bg-opacity-80 rounded-lg max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Social Media</h1>
      <p className="mb-6 text-[#C69749]">
        Add your social media below to display links to them on all your Meetup group profiles.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <div>
            <label className="block text-[#C69749] mb-2">GitHub Link</label>
            <input
              type="url"
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              {...register('githubLink', { required: 'GitHub link is required' })}
            />
          </div>
          <div>
            <label className="block text-[#C69749] mb-2">LinkedIn Link</label>
            <input
              type="url"
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              {...register('linkedinLink', { required: 'LinkedIn link is required' })}
            />
          </div>
          <div>
            <label className="block text-[#C69749] mb-2">Twitter Link</label>
            <input
              type="url"
              className="w-full p-2 border border-[#C69749] rounded bg-[#282A3A] text-white"
              {...register('twitterLink', { required: 'Twitter link is required' })}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          {isLoading && <Loader />}
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

export default Socials;

