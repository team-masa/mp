

const awards = [
  {
    title: "Best Event Planner 2023",
    description: "Awarded by Event Planning Association for exceptional event planning services.",
    date: "March 2023",
  },
  {
    title: "Top 10 Wedding Planners",
    description: "Recognized as one of the top 10 wedding planners by Wedding Magazine.",
    date: "June 2022",
  },
  {
    title: "Outstanding Conference Organizer",
    description: "Awarded for organizing outstanding conferences in 2021.",
    date: "December 2021",
  },
];

const Achievement = (achievements) => {
  return (
    <section id="Achievement" className="bg-slate-800 p-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="bg-[#735F32] rounded-lg shadow-lg p-6">
              <h3 data-aos="fade-left" className="text-2xl font-semibold text-white mb-2">{award.title}</h3>
              <p data-aos="fade-right" className="text-white mb-4">{award.description}</p>
              <span className="text-white text-sm">{award.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
