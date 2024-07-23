import React, { useState } from 'react';

const Project = (projects) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: "Sports Landing Page",
      url: "https://sports-landing-page-five.vercel.app/",
    },
    {
      name: "Housing Project",
      url: "https://housing-project-lake.vercel.app/",
    },
    {
      name: "Belkins Project",
      url: "https://belkins9-ogq7.vercel.app/",
    },
    {
      name: "Wedding Landing Page",
      url: "https://wedding-landingpage-mu.vercel.app/",
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Projects" className='p-8 flex flex-col items-center justify-center bg-slate-900 text-[#735F32] font-semibold'>
      <h1 className='text-2xl mb-8'>PROJECTS</h1>
      <div className='flex gap-6 justify-center'>
        {projects.map((project, index) => (
          <div key={index} className='cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-lg' onClick={() => openModal(project)}>
            <div className='h-40 overflow-hidden'>
              <iframe src={project.url} className="w-full h-96 -mt-10 pointer-events-none" title={project.name}></iframe>
            </div>
            <div className='p-4'>
              <p className='text-white text-lg'>{project.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{selectedProject.name}</h2>
              <button onClick={closeModal} className="text-2xl text-gray-800">&times;</button>
            </div>
            <iframe src={selectedProject.url} className="w-full h-full" title={selectedProject.name}></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;