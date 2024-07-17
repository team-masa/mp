// src/pages/dashboard/components/HomeContent.jsx
import React, { useEffect } from 'react';
import { apiGetSkills } from '../../../services/skill';
import { apiGetAchievements } from '../../../services/achievements';
import { apiGetProjects } from '../../../services/projects';
import { apiGetVolunteering } from '../../../services/volunteering';
import { apiGetEducation } from '../../../services/education';
import { apiGetExperiences } from '../../../services/experiences';

const HomeContent = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalVolunteering, totalEducation, totalExperiences] = await Promise.all([
        apiGetSkills,
        apiGetAchievements,
        apiGetProjects,
        apiGetVolunteering,
        apiGetEducation,
        apiGetExperiences
      ]);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      }

      setData(newData);

    } catch (error) {
      console.log(error)
    } finally {
    setIsLoading(false);
  }
  };

useEffect(() => {
  // getData();
}, [])

  const user = {
    avatar: 'https://ui-avatars.com/api/?background=C69749&color=fff&name=Jane+Doe',
    name: 'Jane Doe',
    username: 'jane_doe',
    email: 'jane.doe@example.com',
  };

  const handleEditProfile = () => {
    // Profile editing logic here
    alert('Profile has been updated!');
  };

  return (
    <div className=" min-h-full text-white flex flex-col pt-16">
      {/* <Header user={user} onEditProfile={handleEditProfile} /> */}
      <main className="flex-1 px-6 py-4 max-w-full-lg mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Main Welcome Section */}
          <div className="flex-1 bg-[#1F2029] p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-[#C69749]">Welcome to Your Portfolio Dashboard</h1>
            <p className="text-lg mb-6 text-[#E0E0E0]">
              Manage your projects, showcase your skills, track your achievements, and update your profile settings here.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="bg-[#3D3F50] p-4 rounded-lg shadow-md flex-1">
                <h2 className="text-xl font-semibold text-[#C69749] mb-2">Recent Projects</h2>
                <p className="text-[#E0E0E0]">Explore your latest projects and add new ones to highlight your work.</p>
                <a href="/projects" className="mt-4 inline-block text-[#C69749] hover:text-[#A67C41]">
                  View Projects
                </a>
              </div>
              <div className="bg-[#3D3F50] p-4 rounded-lg shadow-md mt-4 md:mt-0 flex-1">
                <h2 className="text-xl font-semibold text-[#C69749] mb-2">Manage Skills</h2>
                <p className="text-[#E0E0E0]">Update your skills and showcase what you're proficient in.</p>
                <a href="/skills" className="mt-4 inline-block text-[#C69749] hover:text-[#A67C41]">
                  Manage Skills
                </a>
              </div>
            </div>
          </div>
          {/* Sidebar Section */}
          <div className="mt-6 md:mt-0 md:w-1/3 bg-[#1F2029] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#C69749]">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <a href="/education" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Education
                </a>
              </li>
              <li>
                <a href="/experience" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Experience
                </a>
              </li>
              <li>
                <a href="/achievements" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Achievements
                </a>
              </li>
              <li>
                <a href="/projects" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/skills" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Skills
                </a>
              </li>
              <li>
                <a href="/volunteering" className="block text-lg text-[#E0E0E0] hover:text-[#C69749]">
                  Volunteering
                </a>
              </li>



            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeContent;
