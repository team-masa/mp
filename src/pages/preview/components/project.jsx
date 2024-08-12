/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "react-modal";

// Set the app element for react-modal
Modal.setAppElement('#root'); // Adjust this if your root element has a different id

const Project = ({ projects }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Disable body scroll when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

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
    <div
      id="Projects"
      className="p-8 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white font-semibold"
    >
      <h1 className="text-3xl mb-8 text-yellow-400">PROJECTS</h1>
      <div className="flex gap-6 justify-center flex-wrap">
        {!projects || projects.length === 0 ? (
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
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-gray-800">
                <p className="text-yellow-400 text-lg font-semibold">
                  {project.name}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <div className="bg-gray-900 p-4 rounded-lg w-11/12 lg:w-4/5 h-5/6 lg:h-4/5 relative overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-gray-200 transition-colors"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              {selectedProject.name}
            </h2>
            <div className="w-full h-5/6 overflow-hidden">
              <iframe
                src={selectedProject.link}
                className="w-full h-full"
                title={selectedProject.name}
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Project;