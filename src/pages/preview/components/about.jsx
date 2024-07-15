

import mayTwo from "../../../assets/images/may2.jpg"

const About = () => {
    return (
      



        <div id="About" className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center bg-slate-900'>
          
          <img data-aos="fade-down" src={mayTwo} width={290} height={290} className='rounded border-2 p-1 border-[#f50057] img-glow' alt="" />



            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal text-[#f50057] uppercase'>About Me</h1>
                <p data-aos="fade-left" >I'm a Ghanaian based front end developer focused on crafting user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>

                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>

                        <div className='flex space-x-2'>
                            <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-[#f50057] rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
        
    )
};

export default About