/* eslint-disable react/prop-types */
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = ({
  bio,
  userName,
  email,
  contact,
  githubLink,
  twitterLink,
  linkedinLink,
  services = [], // Adding services as a prop with default empty array
}) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* User Info */}
        <div className="mb-4 md:mb-0 flex flex-col">
          <span className="text-[22px] font-semibold text-yellow-400 uppercase mb-1">
            {userName}
          </span>
          <p className="text-[16px] mb-4">
            <strong>Thank you for visiting my portfolio.</strong><br />
            If you have any questions or opportunities for collaboration,
            <span className="font-bold text-yellow-400"> feel free to reach out.</span>
          </p>

        </div>

        {/* Services */}
        <div className="mb-4 md:mb-0 flex flex-col">
          <h2 className="text-[22px] font-semibold text-yellow-400 py-2 uppercase">
            SERVICES
          </h2>
          <ul className="text-[16px] list-disc pl-5">
            {services.length > 0 ? (
              services.map((service, index) => (
                <li key={index} className="my-2">
                  {service}
                </li>
              ))
            ) : (
              <li className="my-2">No services listed</li>
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-4 md:mb-0 flex flex-col">
          <h2 className="text-[22px] font-semibold text-yellow-400 py-2 uppercase">
            CONTACT
          </h2>
          <p className="text-[16px] mb-4">Email: {email}</p>
          <p className="text-[16px] mb-4">Phone: {contact}</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-[22px] font-semibold text-yellow-400 py-2 uppercase">
            FOLLOW ME
          </h2>
          <div className="flex space-x-4 text-[26px]">
            <a
              className="text-white hover:text-yellow-400 transition-all duration-150 ease-in-out"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-yellow-400 transition-all duration-150 ease-in-out"
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-yellow-400 transition-all duration-150 ease-in-out"
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="text-white hover:text-yellow-400 transition-all duration-150 ease-in-out"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
