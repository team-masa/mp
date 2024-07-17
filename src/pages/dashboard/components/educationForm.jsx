import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const EducationForm = () => {
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      schoolName: 'Harvard University',
      location: 'Cambridge, MA',
      program: 'Computer Science',
      qualification: 'Bachelor\'s Degree',
      grade: 'A',
      startDate: 'Sep 2016',
      endDate: 'May 2020'
    },
    {
      id: 2,
      schoolName: 'MIT',
      location: 'Cambridge, MA',
      program: 'Software Engineering',
      qualification: 'Master\'s Degree',
      grade: 'A',
      startDate: 'Sep 2020',
      endDate: 'May 2022'
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEducation, setNewEducation] = useState({
    schoolName: '',
    location: '',
    program: '',
    qualification: '',
    grade: '',
    startDate: '',
    endDate: ''
  });

  const handleAddEducation = () => {
    if (newEducation.schoolName && newEducation.program) {
      setEducationList([...educationList, { ...newEducation, id: Date.now() }]);
      setNewEducation({
        schoolName: '',
        location: '',
        program: '',
        qualification: '',
        grade: '',
        startDate: '',
        endDate: ''
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteEducation = (id) => {
    setEducationList(educationList.filter(edu => edu.id !== id));
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-16 px-6 py-8 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      {/* Header */}
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
          <span>{showAddForm ? 'Cancel' : 'Add New Education'}</span>
        </button>
      </header>

      {/* Add Education Form */}
      {showAddForm && (
        <div className="bg-[#282A3A] p-6 rounded-lg shadow-md mb-8 animate-slideDown">
          <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Add New Education</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleAddEducation(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">School Name</label>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.schoolName}
                  onChange={(e) => setNewEducation({ ...newEducation, schoolName: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.location}
                  onChange={(e) => setNewEducation({ ...newEducation, location: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Program</label>
                <input
                  type="text"
                  placeholder="Program"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.program}
                  onChange={(e) => setNewEducation({ ...newEducation, program: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Qualification</label>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.qualification}
                  onChange={(e) => setNewEducation({ ...newEducation, qualification: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Grade</label>
                <input
                  type="text"
                  placeholder="Grade"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.grade}
                  onChange={(e) => setNewEducation({ ...newEducation, grade: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">Start Date</label>
                <input
                  type="text"
                  placeholder="Start Date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.startDate}
                  onChange={(e) => setNewEducation({ ...newEducation, startDate: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#C69749] mb-2">End Date</label>
                <input
                  type="text"
                  placeholder="End Date"
                  className="w-full bg-[#000000] text-[#e0e0e0] border border-[#735F32] rounded-lg py-3 px-4 placeholder-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#C69749]"
                  value={newEducation.endDate}
                  onChange={(e) => setNewEducation({ ...newEducation, endDate: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#C69749] text-[#000000] py-2 px-4 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300"
              >
                Add Education
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Education List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationList.map(education => (
          <div key={education.id} className="bg-[#282A3A] p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative">
            <button
              onClick={() => handleDeleteEducation(education.id)}
              className="absolute top-2 right-2 bg-[#FF6B6B] text-[#000000] p-2 rounded-full hover:bg-[#FF4C4C] transform hover:scale-105 transition duration-300"
              aria-label={`Delete ${education.schoolName}`}
            >
              <X size={16} />
            </button>
            <h2 className="text-2xl font-bold text-[#C69749] mb-2">{education.schoolName}</h2>
            <p className="mb-2 text-[#E0E0E0]"><strong>Location:</strong> {education.location}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Program:</strong> {education.program}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Qualification:</strong> {education.qualification}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Grade:</strong> {education.grade}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>Start Date:</strong> {education.startDate}</p>
            <p className="mb-2 text-[#E0E0E0]"><strong>End Date:</strong> {education.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;
