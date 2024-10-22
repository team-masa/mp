import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black text-[#C69749]">
      {/* Desktop and Mobile Top Bar */}
      <div className="flex justify-between items-center p-4">
        {/* Left Section */}
        <div className="hidden md:block text-sm">
          <Link 
            to="/contact" 
            className="outline-dashed hover:text-[#C69749] hover:bg-[#282A3A] p-2 transition-colors duration-300"
          >
            Suggestions? Contact us
          </Link>
        </div>

        {/* Center Logo */}
        <div className="text-sm md:mx-0 mx-auto">
          <Link to="/" className="flex items-center">
            <span className="text-[#735F32] text-2xl md:text-3xl font-serif font-bold">Masa</span>
            <span className="text-[#C69749] text-2xl md:text-3xl">Portfolios</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          <Link to="/login">
            <button className="text-sm hover:bg-[#735F32] hover:text-black border-2 border-[#C69749] px-3 py-1 rounded border-solid transition-colors duration-300">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-sm bg-[#735F32] text-black px-3 py-1.5 rounded hover:bg-[#C69749] transition-colors duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#C69749] hover:text-[#735F32] transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-black border-t border-[#282A3A] ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 p-4">
          <Link 
            to="/contact" 
            className="text-sm outline-dashed hover:text-[#C69749] hover:bg-[#282A3A] p-2 transition-colors duration-300 text-center"
          >
            Suggestions? Contact us
          </Link>
          <Link to="/login" className="w-full">
            <button className="w-full text-sm hover:bg-[#735F32] hover:text-black border-2 border-[#C69749] px-3 py-1 rounded border-solid transition-colors duration-300">
              Log In
            </button>
          </Link>
          <Link to="/signup" className="w-full">
            <button className="w-full text-sm bg-[#735F32] text-black px-3 py-1.5 rounded hover:bg-[#C69749] transition-colors duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;