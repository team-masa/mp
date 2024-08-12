/* eslint-disable react/prop-types */
import { FaCircle } from 'react-icons/fa';

const Experience = ({ experiences }) => {
  return (
    <div
      id="Experience"
      className="p-8 md:p-24 max-w-full bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">EXPERIENCE</h1>
      </div>

      <div 
      data-aos="fade-up"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition  border border-yellow-400 transform  duration-500 hover:scale-105"
            data-aos="fade-up"
          >
            <h2 data-aos="fade-left" className="text-2xl font-bold text-yellow-400 mb-4">{exp.companyName}</h2>
            <ul data-aos="fade-right" className="space-y-3 text-gray-300">
              {exp.responsibility.split('- ').filter(Boolean).map((point, index) => (
                <li key={index} className="flex items-start">
                  <FaCircle className="text-yellow-400 mr-2 mt-1.5 flex-shrink-0" size={8} />
                  <span>{point.trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;