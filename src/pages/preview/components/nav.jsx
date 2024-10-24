/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = ({ username }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-gray-900 z-50">
      <ul className="text-center text-xl p-20 text-white">
        <Link spy={true} smooth={true} to="About" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Skills" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Skills
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Education" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Education
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Experience" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Experience
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Achievement" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Achievement
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Projects" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Projects
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Volunteering" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Volunteering
          </li>
        </Link>
        <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
          <li className="my-4 py-4 border-b border-gray-700 hover:bg-gray-800 hover:rounded">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="lg:fixed bg-gray-900 top-0 left-0 right-0 z-50">
      <div className="h-20 flex justify-between z-50 text-white lg:py-5 px-20 items-center py-4 border-b border-gray-700">
        <div className="">
          <a href="/">
            <span className="text-3xl font-bold cursor-pointer">
              {username}
            </span>
          </a>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center text-white justify-end font-normal hidden">
          <ul className="flex gap-8 text-[18px]">
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                About
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Skills">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Skills
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Education">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Education
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Experience">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Experience
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Achievement">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Achievements
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Projects
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Volunteering">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Volunteering
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-yellow-400 transition border-b-2 border-gray-800 hover:border-white cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>{click && content}</div>
        <button
          className="block md:hidden transition"
          onClick={handleClick}
          aria-label={click ? "Close Menu" : "Open Menu"}
        >
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
