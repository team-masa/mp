import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import Pageloader from '../../../components/pageloader';
import { toast } from 'react-toastify';
import { apiGetProjects, apiDeleteProject, apiAddProject } from '../../../services/projects';
import { useForm } from 'react-hook-form';

const predefinedSkills = [
  'JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind CSS', 'HTML', 'Python', 'Django', 'Java', 'PHP', 'Laravel', 'Ruby', 'Rails', 'TypeScript', 'Angular', 'Vue.js', 'MongoDB', 'MySQL', 'PostgreSQL'
];

const ProjectsContent = () => {
  const [projects, setProjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const fetchProjects = async () => {
    try {
      const res = await apiGetProjects();
      setProjects(res.data.Projects || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDeleteProject = async (id) => {
    try {
      const res = await apiDeleteProject(id);
      toast.success(res.data.message);
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete project");
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Convert skills array to comma-separated string
      const formattedData = {
        ...data,
        skills: data.skills.join(', ')
      };
      const res = await apiAddProject(formattedData);
      toast.success(res.data.message);
      fetchProjects(); // Refresh the projects list
      setShowAddForm(false);
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data || "Failed to add project");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-4 px-4 py-4 max-w-screen-lg rounded-lg">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Projects</h1>
        <p className="text-lg text-[#E0E0E0] mb-6">Manage and showcase your projects here.</p>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          <span>{showAddForm ? 'Cancel' : 'Add New Project'}</span>
        </button>
      </header>

      {/* Add Project Form */}
      {showAddForm && (
        <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Add New Project</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Project Name */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Project Name</label>
              <input
                type="text"
                placeholder="Project Name"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('projectName', { required: true })}
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Description</label>
              <textarea
                placeholder="Project Description"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('description', { required: true })}
              />
            </div>
            {/* Contributors */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Contributors</label>
              <input
                type="text"
                placeholder="Contributors"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('contributors')}
              />
            </div>
            {/* Skills */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                {predefinedSkills.map(skill => (
                  <label key={skill} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={skill}
                      {...register('skills')}
                      className="form-checkbox h-5 w-5 text-[#C69749]"
                    />
                    <span className="ml-2 text-[#E0E0E0]">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Link */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Project Link</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('link')}
              />
            </div>
            {/* Name Of Institution */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Institution</label>
              <input
                type="text"
                placeholder="Institution Name"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('nameOfInstitution')}
              />
            </div>
            {/* Start Date */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">Start Date</label>
              <input
                type="date"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('startDate')}
              />
            </div>
            {/* End Date */}
            <div className="mb-4">
              <label className="block text-[#C69749] mb-2">End Date</label>
              <input
                type="date"
                className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                {...register('endDate')}
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#C69749] text-[#000000] py-2 px-4 items-center rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? <Pageloader /> : 'Add Project'}
            </button>
          </form>
        </div>
      )}

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-[#282A3A] p-6 rounded-lg shadow-md flex flex-col transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold mb-2 text-[#C69749]">{project.projectName}</h2>
            <p className="mb-2 text-[#E0E0E0]">{project.description}</p>
            <div className="mb-2 flex flex-wrap gap-2">
              {project.skills.split(', ').map(skill => (
                <span key={skill} className="bg-[#C69749] text-[#000000] py-1 px-3 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
            <p className="mb-2 text-[#E0E0E0]"><strong>Contributors:</strong> {project.contributors}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Institution:</strong> {project.nameOfInstitution}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Start Date:</strong> {project.startDate}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>End Date:</strong> {project.endDate}</p>
            <a href={project.link} className="text-[#C69749] hover:underline mb-4" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <button
              onClick={() => handleDeleteProject(project.id)}
              className="bg-[#FF6B6B] text-[#000000] py-1 px-3 rounded-lg hover:bg-[#FF4C4C] transform hover:scale-105 transition duration-300"
              aria-label={`Delete ${project.projectName}`}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;