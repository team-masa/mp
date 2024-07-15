import belkinsOne from "../../../assets/videos/belkins.mp4";
import soccaBel from "../../../assets/videos/soccaBel.mp4";

const Project = () => {
  return (
    <div id="Project" className='p-20 flex flex-col items-center justify-center bg-slate-900 text-white font-semibold text-3xl'>
      <h1>PROJECTS</h1>
      <div className='flex flex-wrap gap-5 justify-center mt-5'>
        <video className='w-full max-w-xs md:max-w-sm lg:max-w-md' controls>
          <source src={belkinsOne} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video className='w-full max-w-xs md:max-w-sm lg:max-w-md' controls>
          <source src={soccaBel} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Project;
