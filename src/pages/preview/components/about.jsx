

import mayTwo from "../../../assets/images/may2.jpg"

const About = ({about}) => {
    return (
    <div id="About" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center bg-slate-900'>
          
          <img data-aos="fade-down" src={mayTwo} width={290} height={290} className='rounded border-2 p-1 border-[#735F32] img-glow' alt="" />



            <div className='h-full lg:py-40 flex flex-col justify-center  items-center text-white'>
                <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-[#735F32] uppercase '>About Me</h1>
                <p data-aos="fade-left">{`${about}`}</p>

                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>

                        <div className='flex space-x-2'>
                            <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-[#735F32] border-[#735F32] rounded-lg py-4 px-8 uppercase relative overflow-hidden '>Resume</button>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
        
    )
};

export default About