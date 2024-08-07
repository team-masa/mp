import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-gray-900 to-gray-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-[22px] font-semibold text-yellow-400 py-2 uppercase'>Belkins</span>
          <p className='text-[16px] my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum voluptate accusantium dignissimos mollitia illo eius sed.</p>
        </div>

        <div>
          <h2 className='text-[22px] font-semibold text-yellow-400 py-2 uppercase'>SERVICES</h2>
          <ul className='text-[16px]'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>SEO</li>
            <li className='my-2'>E-Commerce</li>
          </ul>
        </div>

        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-yellow-400 py-2 uppercase'>CONTACT</h2>
          <p className='text-[16px] mb-4'>Email: acquahmabel60@gmail.com</p>
          <p className='text-[16px] mb-4'>Phone: +233 559 618 020</p>
        </div>

        <div>
          <h2 className='text-[22px] font-semibold text-yellow-400 py-2 uppercase'>FOLLOW ME</h2>
          <div className='flex space-x-4 text-[26px]'>
            <a className='text-white hover:text-yellow-400 transition-all duration-150 ease-in-out' href="#"><FaGithub/></a>
            <a className='text-white hover:text-yellow-400 transition-all duration-150 ease-in-out' href="#"><FaLinkedinIn/></a>
            <a className='text-white hover:text-yellow-400 transition-all duration-150 ease-in-out' href="#"><FaTwitter/></a>
            <a className='text-white hover:text-yellow-400 transition-all duration-150 ease-in-out' href="#"><FaInstagram/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
