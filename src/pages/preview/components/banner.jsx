import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { FiTwitter } from 'react-icons/fi'
import mayImage from "../../../assets/images/may.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
useEffect(() =>{
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
},[])


    return (
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center bg-slate-900'>

            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                <h1 data-aos='fade-right'  className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome To <span className='text-[#f50057]'>My Website</span></h1>
                <p data-aos='fade-left' >I'm a Ghanaian based front end developer focused on crafting user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>

                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>

                        <div className='flex space-x-2'>
                            <a href="" className='text-[#f50057] hover:text-fuchsia-500 rounded-full glow p-2'>
                                <AiFillGithub className='text-[28px]' />
                            </a>
                            <a href="" className='text-[#f50057] hover:text-fuchsia-500 rounded-full glow p-2'>
                                <FaLinkedinIn className='text-[28px]' />
                            </a>
                            <a href="" className='text-[#f50057] hover:text-fuchsia-500 rounded-full glow p-2'>
                                <FiTwitter className='text-[28px]' />
                            </a>
                            <a href="" className='text-[#f50057] hover:text-fuchsia-500 rounded-full glow p-2'>
                                <FaInstagram className='text-[28px]' />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
            <img data-aos='fade-up'  src={mayImage} width={290} height={290} className='rounded-full border-2 p-1 border-[#f50057] img-glow' alt="" />
        </div>
    )
};

export default Banner