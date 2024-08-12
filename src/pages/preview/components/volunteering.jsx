/* eslint-disable react/prop-types */
import { FaCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Volunteering = ({ volunteering }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="Volunteering"
      className="bg-gradient-to-b from-gray-700 to-gray-800 py-32"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8" data-aos="fade-down">
          Volunteering
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(volunteering) && volunteering.length > 0 ? (
            volunteering?.map((vol) => (
              <div
                key={vol.id}
                className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-yellow-400 break-words">
                  {vol.organization}
                </h3>
                <p className="text-lg text-gray-300 font-medium break-words">{vol.role}</p>
                <p className="text-sm text-gray-500">
                  {new Date(vol.startDate).toLocaleDateString()} -{" "}
                  {new Date(vol.endDate).toLocaleDateString()}
                </p>
                <p className="text-gray-300 mt-2 break-words">{vol.description}</p>
                {Array.isArray(vol.skills) && vol.skills.length > 0 ? (
                  <p className="text-gray-500 mt-1 break-words">
                    Skills: {vol.skills.join(", ")}
                  </p>
                ) : (
                  <p className="text-gray-500 mt-1">Skills: Not specified</p>
                )}
                <p className="text-gray-500 mt-1 break-words">Location: {vol.location}</p>
                <p className="text-gray-500 mt-1 break-words">
                  Project: {vol.projectName || "N/A"}
                </p>
                <ul className="space-y-3 whitespace-pre-wrap break-words text-gray-300 mt-4">
                  {vol.responsibility.split('- ').filter(Boolean).map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm break-words"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      <FaCircle className="text-yellow-400 mr-2 mt-1.5 flex-shrink-0" size={8} />
                      <span className='w-full  whitespace-normal'>{point.trim()}</span>
                    </li>
                  ))}
                </ul>
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
