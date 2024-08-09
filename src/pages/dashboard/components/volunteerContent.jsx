import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";
import {
  apiGetVolunteering,
  apiAddVolunteering,
  apiDeleteVolunteering,
} from "../../../services/volunteering";
import { formatDate } from "../../../utils";

const VolunteeringContent = () => {
  const [volunteering, setVolunteering] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVolunteering, setNewVolunteering] = useState({
    organization: "",
    description: "",
    skills: "",
    startDate: "",
    endDate: "",
    role: "",
    responsibility: "",
    location: "",
    projectName: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVolunteering = async () => {
      try {
        const response = await apiGetVolunteering();
        setVolunteering(response.data.Volunteering);
      } catch (error) {
        console.error("Failed to fetch volunteering data:", error);
      }
    };

    fetchVolunteering();
  }, []);

  const isValidDate = (date) => {
    // Simple date validation (change this as needed)
    return !isNaN(Date.parse(date));
  };

  const handleAddVolunteering = async () => {
    if (
      newVolunteering.organization &&
      newVolunteering.description &&
      newVolunteering.skills &&
      isValidDate(newVolunteering.startDate) &&
      isValidDate(newVolunteering.endDate) &&
      newVolunteering.role &&
      newVolunteering.responsibility &&
      newVolunteering.location &&
      newVolunteering.projectName
    ) {
      try {
        const response = await apiAddVolunteering(newVolunteering);
        setVolunteering([...volunteering, response.data]);
        setNewVolunteering({
          organization: "",
          description: "",
          skills: "",
          startDate: "",
          endDate: "",
          role: "",
          responsibility: "",
          location: "",
          projectName: "",
        });
        setShowAddForm(false);
        setError("");
      } catch (error) {
        setError(
          `Failed to add volunteering experience: ${
            error.response?.data || error.message
          }`
        );
        console.error("Failed to add volunteering experience:", error);
      }
    } else {
      setError(
        "Please ensure all fields are filled out correctly and dates are valid."
      );
    }
  };

  const handleDeleteVolunteering = async (id) => {
    try {
      await apiDeleteVolunteering(id);
      setVolunteering(volunteering.filter((vol) => vol._id !== id));
    } catch (error) {
      console.error("Failed to delete volunteering experience:", error);
    }
  };

  return (
    <div className="bg-[#000000] bg-opacity-70 min-h-full text-[#e0e0e0] flex flex-col pt-16 px-6 py-8 max-w-screen-lg mx-auto rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#C69749]">
          {" "}
          Volunteering
        </h1>
        <p className="text-lg text-[#E0E0E0] mb-6">
          Showcase your volunteering here.
        </p>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#C69749] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#A67C41] transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto"
        >
          <Plus size={24} />
          {showAddForm ? "Cancel" : "Add Volunteering Experience"}
        </button>
      </header>

      {showAddForm && (
        <div className="mb-4 p-4 bg-[#282A3A] rounded">
          <input
            type="text"
            placeholder="Organization"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.organization}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                organization: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.description}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                description: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Skills"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.skills}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                skills: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="Start Date (YYYY-MM-DD)"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.startDate}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                startDate: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="End Date (YYYY-MM-DD)"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.endDate}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                endDate: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Role"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.role}
            onChange={(e) =>
              setNewVolunteering({ ...newVolunteering, role: e.target.value })
            }
          />
          <textarea
            placeholder="Responsibilities"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.responsibility}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                responsibility: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.location}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                location: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Project Name"
            className="w-full mb-2 p-2 bg-[#000000] text-[#e0e0e0] rounded"
            value={newVolunteering.projectName}
            onChange={(e) =>
              setNewVolunteering({
                ...newVolunteering,
                projectName: e.target.value,
              })
            }
          />
          <button
            className="bg-[#735F32] text-[#C69749] py-2 px-4 rounded hover:bg-[#C69749] hover:text-[#000000] transition duration-300"
            onClick={handleAddVolunteering}
          >
            Add
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      <div>
        {volunteering?.map((vol) => (
          <div
            key={vol.id}
            className="border-b border-[#282A3A] py-4 flex items-start justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#C69749]">
                {vol.organization}
              </h3>
              <p className="text-sm text-[#735F32]">{vol.role}</p>
              <p className="text-xs text-[#e0e0e0]">
                {formatDate(vol.startDate)} - {formatDate(vol.endDate)}
              </p>
              <p className="text-sm mt-2 text-[#e0e0e0]">{vol.description}</p>
              <p className="text-xs mt-1 text-[#735F32]">
                Skills: {vol.skills}
              </p>
              <p className="text-xs mt-1 text-[#735F32]">
                Location: {vol.location}
              </p>
              <p className="text-xs mt-1 text-[#735F32]">
                Project: {vol.projectName}
              </p>
            </div>
            <button
              onClick={() => handleDeleteVolunteering(vol._id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteeringContent;
