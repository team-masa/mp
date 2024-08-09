/* eslint-disable react/prop-types */

const Volunteering = ({ volunteering }) => {
  return (
    <section
      id="Volunteering"
      className="bg-gradient-to-b from-gray-700 to-gray-800 py-32"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
          Volunteering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(volunteering) && volunteering.length > 0 ? (
            volunteering?.map((vol) => (
              <div
                key={vol.id}
                className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-yellow-400">
                  {vol.organization}
                </h3>
                <p className="text-lg text-gray-300 font-medium">{vol.role}</p>
                <p className="text-sm text-gray-500">
                  {new Date(vol.startDate).toLocaleDateString()} -{" "}
                  {new Date(vol.endDate).toLocaleDateString()}
                </p>
                <p className="text-gray-300 mt-2">{vol.description}</p>
                {Array.isArray(vol.skills) && vol.skills.length > 0 ? (
                  <p className="text-gray-500 mt-1">
                    Skills: {vol.skills.join(", ")}
                  </p>
                ) : (
                  <p className="text-gray-500 mt-1">Skills: Not specified</p>
                )}
                <p className="text-gray-500 mt-1">Location: {vol.location}</p>
                <p className="text-gray-500 mt-1">
                  Project: {vol.projectName || "N/A"}
                </p>
                <p className="text-gray-300 mt-2">{vol.responsibility}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-300">
              No volunteering experiences available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
