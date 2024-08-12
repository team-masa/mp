/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const About = ({ about, profilePicture, resume }) => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    if (!resume) {
      console.error("Resume URL is not provided.");
      return;
    }
    
    // Open the resume link in a new tab
    window.open(resume, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center bg-gradient-to-br from-gray-700 to-gray-800"
    >
      <img
        data-aos="fade-down"
        src={`https://savefiles.org/${profilePicture}?shareable_link=323`}
        alt={profilePicture}
        width={320}
        height={320}
        className="rounded-full border-4 p-1 border-yellow-400 shadow-lg"
      />

      <div className="h-full lg:py-40 flex flex-col justify-center items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-4xl font-bold mb-8 leading-normal text-yellow-400 uppercase"
        >
          About Me
        </h1>
        <p data-aos="fade-left" className="text-lg text-gray-300">
          {about}
        </p>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <Link
              to={resume}
              onClick={handleResumeClick}
              id="resume"
              className="shadow-lg hover:shadow-xl text-white bg-gradient-to-r from-yellow-400 to-yellow-500 border-none rounded-lg py-4 px-8 uppercase transition-colors duration-300"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;