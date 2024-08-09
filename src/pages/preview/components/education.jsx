/* eslint-disable react/prop-types */

const Education = ({ education }) => {
  return (
    <div
      id="Education"
      className="p-24 max-w-full pl-6 md:pl-16 bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">EDUCATION</h1>
      </div>

      <div
        data-aos="fade-up"
        className="space-y-4 gap-10 text-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10"
      >
        {education?.length > 0 ? (
          education?.map((edu, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex flex-col backdrop-filter backdrop-blur-lg"
            >
              <div
                data-aos="fade-left"
                className="flex flex-col md:flex-row md:items-center md:space-x-4"
              >
                <p className="text-2xl font-bold text-yellow-400">
                  {edu.schoolName}
                </p>
                <p className="text-md text-gray-300">
                  {edu.program} - {edu.qualification}
                </p>
              </div>
              <p className="mt-2 text-gray-300">{edu.grade}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300">
            No education entries available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Education;
