import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div id="Experience" className="p-24 max-w-full pl-6 md:pl-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">EXPERIENCE</h1>
      </div>

      <div data-aos="fade-up" className="space-y-4 gap-10 text-[16px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex flex-col backdrop-filter backdrop-blur-lg">
            <div data-aos="fade-left" className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <p className="text-2xl font-bold text-yellow-400">{exp.companyName}</p>
            </div>
            <p data-aos="fade-right" className="mt-2 md:mt-0 md:ml-10 text-gray-300">{exp.responsibility}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
