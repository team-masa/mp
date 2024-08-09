/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = ({ bio, github, linkedin, twitter, profilePic }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const handleGithubClick = (e) => {
    e.preventDefault();
    window.open(github, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="relative w-full h-full">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 bg-gray-400 rounded-full absolute animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white z-10">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-bold mb-8 leading-tight uppercase text-shadow"
        >
          Welcome To <span className="text-yellow-400">My Website</span>
        </h1>
        <p data-aos="fade-left" className="text-lg mb-8 max-w-2xl">
          {bio}
        </p>
        <div className="flex mt-8 gap-4">
          <div className="flex items-center justify-center">
            <div className="flex space-x-4">
              {github && (
                <a
                  href={github}
                  onClick={handleGithubClick}
                  className="text-yellow-400 hover:text-white transition-colors duration-300 rounded-full bg-opacity-20 bg-gray-300 p-3"
                >
                  <AiFillGithub className="text-3xl" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors duration-300 rounded-full bg-opacity-20 bg-gray-300 p-3"
                >
                  <FaLinkedinIn className="text-3xl" />
                </a>
              )}
              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white transition-colors duration-300 rounded-full bg-opacity-20 bg-gray-300 p-3"
                >
                  <FiTwitter className="text-3xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={profilePic || "default-image-url.jpg"}
        width={320}
        height={320}
        className="relative rounded-full border-4 p-1 border-yellow-400 shadow-xl z-10"
        alt="Profile"
      />
    </div>
  );
};

export default Banner;
