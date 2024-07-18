import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Pageloader from '../../../components/pageloader';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { apiGetProjects } from '../../../services/projects';
import { useForm } from 'react-hook-form';
import { InfinitySpin } from 'react-loader-spinner';

const predefinedSkills = [
  'JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind CSS', 'HTML', 'Python', 'Django', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'Ruby', 'Rails', 'TypeScript', 'Angular', 'Vue.js', 'MongoDB', 'MySQL', 'PostgreSQL'
];

const ProjectsContent = () => {
  const [projects, setProjects] = useState([
    { id: 1, projectName: 'Portfolio Website', description: 'A personal portfolio to showcase my work.', contributors: 'Me', skills: ['React', 'Tailwind CSS'], link: 'https://myportfolio.com', nameOfInstitution: 'Self', startDate: 'Jan 2023', endDate: 'Present' },
    { id: 2, projectName: 'E-Commerce Platform', description: 'An online store for various products.', contributors: 'Me and team', skills: ['Node.js', 'MongoDB'], link: 'https://myecommerce.com', nameOfInstitution: 'Tech Corp', startDate: 'Jun 2022', endDate: 'Dec 2022' }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    projectName: '',
    description: '',
    contributors: '',
    skills: [],
    link: '',
    nameOfInstitution: '',
    startDate: '',
    endDate: ''
  });
  const [selectedSkill, setSelectedSkill] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleAddProject = () => {
    if (newProject.projectName && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
      setNewProject({
        projectName: '',
        description: '',
        contributors: '',
        skills: [],
        link: '',
        nameOfInstitution: '',
        startDate: '',
        endDate: ''
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(proj => proj.id !== id));
  };

  const handleSelectSkill = (skill) => {
    if (skill && !newProject.skills.includes(skill)) {
      setNewProject({ ...newProject, skills: [...newProject.skills, skill] });
    }
    setSelectedSkill('');
  };

  const fetchProjects = async () => {
    try {

      const res = await apiGetProjects();
      console.log(res.data)
      setSkills(res.data.Projects)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchProjects()
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)

    try {
      const res = await apiGetProjects({
        projectName: data.projectName,
        description: data.description,
        contributors:data.contributors,
        skills: data.skills,
        link: data.link,
        nameOfInstitution:data.institution,
        startDate: data.startDate,
        endDate: data.endDate
      });

      console.log(res.data);
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-4 px-4 py-4 max-w-screen-lg rounded-lg">
    {/* Header */}
    <header className="mb-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Projects</h1>
      <p className="text-lg text-[#E0E0E0] mb-6">
        Manage and showcase your projects here.
      </p>
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
      >
        <Plus size={24} />
        <span>{showAddForm ? 'Cancel' : 'Add New Project'}</span>
        {isSubmitting ? <InfinitySpin /> : ""}

      </button>
    </header>

    {/* Add Project Form */}
    {showAddForm && (
      <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Add New Project</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Project Name</label>
            <input
              type="text"
              placeholder="Project Name"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.projectName}
              onChange={(e) => setNewProject({ ...newProject, projectName: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Description</label>
            <textarea
              placeholder="Description"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Contributors</label>
            <input
              type="text"
              placeholder="Contributors"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.contributors}
              onChange={(e) => setNewProject({ ...newProject, contributors: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Skills</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {newProject.skills.map(skill => (
                <div key={skill} className="bg-[#C69749] text-[#000000] py-1 px-3 rounded-full flex items-center space-x-2">
                  <span>{skill}</span>
                  <button
                    onClick={() => setNewProject({ ...newProject, skills: newProject.skills.filter(s => s !== skill) })}
                    className="text-[#FF6B6B] hover:text-[#FF4C4C] transition duration-300"
                    aria-label={`Remove ${skill}`}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#C69749]"
            >
              <option value="">Select a skill...</option>
              {predefinedSkills.map(skill => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => handleSelectSkill(selectedSkill)}
              disabled={!selectedSkill}
              className="bg-[#C69749] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 mt-4 w-full disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              Add Skill
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Project Link</label>
            <input
              type="url"
              placeholder="Project Link"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.link}
              onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Name of Institution</label>
            <input
              type="text"
              placeholder="Name of Institution"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.nameOfInstitution}
              onChange={(e) => setNewProject({ ...newProject, nameOfInstitution: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">Start Date</label>
            <input
              type="text"
              placeholder="Start Date"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.startDate}
              onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#C69749] mb-2">End Date</label>
            <input
              type="text"
              placeholder="End Date"
              className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
              value={newProject.endDate}
              onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-[#C69749] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300"
          >
            Add Project
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
            {project.skills.map(skill => (
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