import React, { useState } from 'react';
import { Trash2, Edit, Check } from 'lucide-react';

const VolunteeringContent = () => {
  const [volunteering, setVolunteering] = useState([
    {
      id: 1,
      organization: 'Nonprofit Org',
      description: 'Helped organize community events',
      skills: 'Event Planning, Team Coordination',
      startDate: 'Jan 2022',
      endDate: 'Dec 2022',
      role: 'Volunteer Coordinator',
      responsibility: 'Coordinated volunteers and managed events',
      location: 'City, Country',
      projectName: 'Community Outreach Program'
    },
    {
      id: 2,
      organization: 'Charity Foundation',
      description: 'Assisted with fundraising campaigns',
      skills: 'Fundraising, Public Speaking',
      startDate: 'Mar 2020',
      endDate: 'Feb 2021',
      role: 'Fundraising Volunteer',
      responsibility: 'Organized fundraising events and campaigns',
      location: 'City, Country',
      projectName: 'Annual Charity Drive'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newVolunteering, setNewVolunteering] = useState({
    organization: '',
    description: '',
    skills: '',
    startDate: '',
    endDate: '',
    role: '',
    responsibility: '',
    location: '',
    projectName: ''
  });

  const handleAddVolunteering = () => {
    if (
      newVolunteering.organization &&
      newVolunteering.description &&
      newVolunteering.skills &&
      newVolunteering.startDate &&
      newVolunteering.endDate &&
      newVolunteering.role &&
      newVolunteering.responsibility &&
      newVolunteering.location &&
      newVolunteering.projectName
    ) {
      setVolunteering([...volunteering, { ...newVolunteering, id: Date.now() }]);
      setNewVolunteering({
        organization: '',
        description: '',
        skills: '',
        startDate: '',
        endDate: '',
        role: '',
        responsibility: '',
        location: '',
        projectName: ''
      });
      setShowAddForm(false);
    }
  };

  const handleDeleteVolunteering = (id) => {
    setVolunteering(volunteering.filter(vol => vol.id !== id));
  };

  return (
    <div className="mb-6 text-[#e0e0e0]">
      <h2 className="text-2xl font-semibold mb-4 text-[#C69749]">Volunteering</h2>
      <div className="bg-[#000000] bg-opacity-70 p-4 rounded-lg shadow-md">
        <button
          className="mb-4 bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add Volunteering Experience'}
        </button>

        {showAddForm && (
          <div className="mb-4 p-4 bg-[#282A3A] rounded">
            <input
              type="text"
              placeholder="Organization"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.organization}
              onChange={(e) => setNewVolunteering({...newVolunteering, organization: e.target.value})}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.description}
              onChange={(e) => setNewVolunteering({...newVolunteering, description: e.target.value})}
            />
            <input
              type="text"
              placeholder="Skills"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.skills}
              onChange={(e) => setNewVolunteering({...newVolunteering, skills: e.target.value})}
            />
            <input
              type="text"
              placeholder="Start Date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.startDate}
              onChange={(e) => setNewVolunteering({...newVolunteering, startDate: e.target.value})}
            />
            <input
              type="text"
              placeholder="End Date"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.endDate}
              onChange={(e) => setNewVolunteering({...newVolunteering, endDate: e.target.value})}
            />
            <input
              type="text"
              placeholder="Role"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.role}
              onChange={(e) => setNewVolunteering({...newVolunteering, role: e.target.value})}
            />
            <textarea
              placeholder="Responsibilities"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.responsibility}
              onChange={(e) => setNewVolunteering({...newVolunteering, responsibility: e.target.value})}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.location}
              onChange={(e) => setNewVolunteering({...newVolunteering, location: e.target.value})}
            />
            <input
              type="text"
              placeholder="Project Name"
              className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
              value={newVolunteering.projectName}
              onChange={(e) => setNewVolunteering({...newVolunteering, projectName: e.target.value})}
            />
            <button 
              className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
              onClick={handleAddVolunteering}
            >
              Add
            </button>
          </div>
        )}

        <div>
          {volunteering.map((vol) => (
            <div key={vol.id} className="border-b border-[#282A3A] py-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#C69749]">{vol.organization}</h3>
                <p className="text-sm text-[#735F32]">{vol.role}</p>
                <p className="text-xs text-[#e0e0e0]">{vol.startDate} - {vol.endDate}</p>
                <p className="text-sm mt-2 text-[#e0e0e0]">{vol.description}</p>
                <p className="text-xs mt-1 text-[#735F32]">Skills: {vol.skills}</p>
                <p className="text-xs mt-1 text-[#735F32]">Location: {vol.location}</p>
                <p className="text-xs mt-1 text-[#735F32]">Project: {vol.projectName}</p>
                <p className="text-sm mt-2 text-[#e0e0e0]">{vol.responsibility}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-[#C69749] hover:text-[#735F32] transition duration-300"
                  onClick={() => handleDeleteVolunteering(vol.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteeringContent;
