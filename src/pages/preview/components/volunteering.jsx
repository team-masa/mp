

const volunteeringExperiences = [
  {
    title: "Community Clean-Up",
    description: "Organized a community clean-up event that brought together over 100 volunteers to clean local parks and streets.",
    date: "April 2023",
  },
  {
    title: "Food Drive Coordinator",
    description: "Coordinated a food drive that collected and distributed over 2,000 pounds of food to local shelters.",
    date: "December 2022",
  },
  {
    title: "Youth Mentor",
    description: "Mentored at-risk youth through a local nonprofit, providing guidance and support for academic and personal development.",
    date: "September 2021 - Present",
  },
];

const Volunteering = (volunteering) => {
  return (
    <section id="Volunteering"  className="bg-slate-800 py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Volunteering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteeringExperiences.map((experience, index) => (
            <div key={index} className="bg-[#735F32] rounded-lg shadow-lg p-6">
              <h3 data-aos="fade-up" className="text-2xl font-semibold text-white mb-2">{experience.title}</h3>
              <p data-aos="fade-down"className="text-white mb-4">{experience.description}</p>
              <span className="text-white text-sm">{experience.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
