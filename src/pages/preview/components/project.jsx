import React, { useState, useEffect } from 'react';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch projects from API on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects'); // Adjust the endpoint if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Open modal with selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Projects" className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white font-semibold">
      <h1 className="text-3xl mb-8 text-yellow-400">PROJECTS</h1>
      <div className="flex gap-6 justify-center flex-wrap">
        {projects.length === 0 ? (
          <p>No projects available</p>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden shadow-lg w-80 transition-transform transform hover:scale-105"
              onClick={() => openModal(project)}
            >
              <div className="h-40 overflow-hidden relative bg-gray-700">
                <iframe
                  src={project.link}
                  className="absolute inset-0 w-full h-full"
                  title={project.name}
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-gray-800">
                <p className="text-yellow-400 text-lg font-semibold">{project.name}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-4 rounded-lg w-11/12 lg:w-4/5 h-5/6 lg:h-4/5 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-gray-200 transition-colors"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-yellow-400 mb-4">{selectedProject.name}</h2>
            <iframe
              src={selectedProject.link}
              className="w-full h-full"
              title={selectedProject.name}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
