/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const proficiencyLevels = {
  Beginner: { level: 25, color: "#FF6B6B" },
  Intermediate: { level: 50, color: "#4ECDC4" },
  Advanced: { level: 75, color: "#45B7D1" },
  Expert: { level: 100, color: "#A06CD5" },
};

const MySkills = ({ skills }) => {
  const [originalSkills, setOriginalSkills] = useState([]);
  const [selectedProficiency, setSelectedProficiency] = useState("All");
  const [displayedSkills, setDisplayedSkills] = useState([]);

  useEffect(() => {
    // Initialize originalSkills and displayedSkills when the component mounts
    setOriginalSkills(skills);
    setDisplayedSkills(skills);
  }, [skills]);

  const handleProficiencyChange = (proficiency) => {
    setSelectedProficiency(proficiency);

    if (proficiency === "All") {
      setDisplayedSkills(originalSkills);
    } else {
      const updatedSkills = originalSkills.filter(
        (skill) => skill.levelOfProficiency === proficiency
      );
      setDisplayedSkills(updatedSkills);
    }
  };

  return (
    <div
      id="Skills"
      className="flex flex-col items-center py-24 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <h1
        data-aos="fade-up"
        className="font-bold text-3xl mb-10 text-yellow-400"
      >
        MY SKILLS
      </h1>

      {/* Dropdown to select proficiency level */}
      <select
        value={selectedProficiency}
        onChange={(e) => handleProficiencyChange(e.target.value)}
        className="mb-10 p-2 rounded-lg"
      >
        <option value="All">All Skills</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>

      <div
        data-aos="fade-down"
        className="grid grid-cols-2 md:grid-cols-4 gap-10"
      >
        {displayedSkills?.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => {
                const percentage = isVisible
                  ? proficiencyLevels[skill.levelOfProficiency]
                  : 0;
                return (
                  <div className="w-28 h-28 mb-3">
                    <CircularProgressbar
                      value={percentage.level}
                      text={`${percentage.level}%`}
                      styles={buildStyles({
                        textSize: "22px",
                        pathColor: percentage.color,
                        textColor: percentage.color,
                        trailColor: "#1F2937", // Dark trail color
                      })}
                    />
                  </div>
                );
              }}
            </VisibilitySensor>
            <p
              data-aos="fade-left"
              className="text-lg font-semibold text-gray-300"
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
