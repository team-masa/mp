//src/pages/preview/index.jsx
import { capitalize } from "lodash";
import About from "./components/about";
import Achievement from "./components/achievement";
import Banner from "./components/banner";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Project from "./components/project";
import MySkills from "./components/skills";
import Volunteering from "./components/volunteering";
import { useLoaderData } from "react-router-dom";
import Education from "./components/education";

const Preview = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Preview ~ data:", data);
  return (
    <div>
      <Nav username={capitalize(data.userName)} />
      <Banner
        profilePicture={data.userProfile.profilePicture}
        bio={data.userProfile.bio}
        github={data.userProfile.githubLink}
        linkedin={data.userProfile.linkedinLink}
        twitter={data.userProfile.twitterLink}
      />
      <About
        profilePicture={data.userProfile.profilePicture}
        firstName={data.firstName}
        lastName={data.lastName}
        about={data.userProfile.about}
        resumeLink={data.userProfile.resume}
      />
      <MySkills skills={data.skills} />
      <Education education={data.education} />
      <Experience experiences={data.experiences} />
      <Achievement achievements={data.achievements} />
      <Project projects={data.projects} />
      <Volunteering volunteering={data.volunteering} />
      <Contact />
      <Footer
        // bio={data.userProfile.bio}
        services={data.userProfile.services}
        userName={data.userName}
        contact={data.userProfile.contact}
        email={data.email}
        linkedinLink={data.userProfile.linkedinLink}
        githubLink={data.userProfile.githubLink}
        twitterLink={data.userProfile.twitterLink}
      />
    </div>
  );
};

export default Preview;
