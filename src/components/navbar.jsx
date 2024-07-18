import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#000000] text-[#C69749]">
      <div className="text-sm">
        <Link to="/contact" className="outline-dashed hover:text-[#C69749] hover:bg-[#282A3A] p-2 transition-colors duration-300">
          Suggestions? Contact us
        </Link>
      </div>
      <div className="text-sm space-x-4">
        <Link to="/">
          <span className="text-[#735F32] text-3xl font-serif font-bold">Masa</span>
          <span className="text-[#C69749] sans text-3xl">Portfolios</span>
        </Link>
      </div>
      <div className="flex space-x-2">
        <Link to="/login">
          <button className="text-sm hover:bg-[#735F32] hover:text-[#000000] border-2 border-[#C69749] px-3 py-1 rounded border-solid transition-colors duration-300">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="text-sm bg-[#735F32] text-[#000000] px-3 py-1.5 rounded hover:bg-[#C69749] transition-colors duration-300">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
