import React from "react";

const Volunteering = ({ volunteering }) => {

  return (
    <section id="Volunteering" className="bg-slate-800 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Volunteering</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteering?.map((experience) => (
            <div key={experience.id} className="bg-[#735F32] rounded-lg shadow-lg p-6 relative">

              <h3 className="text-2xl font-semibold text-white mb-2">{experience.role}</h3>
              <p className="text-white mb-4">{experience.organization}</p>
              <span className="text-white text-sm">{experience.date}</span>
              <p className="text-white mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
