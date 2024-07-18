const Project = () => {
  return (
    <div id="Projects" className='p-32 flex flex-col items-center justify-center bg-slate-900 text-[#735F32] font-semibold text-2xl'>
      <h1>PROJECTS</h1>
      <div className='grid grid-cols-2 gap-5 justify-center mt-5'>
        <a href="https://sports-landing-page-five.vercel.app/" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">
          <img src="path/to/sports-thumbnail.jpg" alt="Sports Landing Page Thumbnail" className='mb-2' />
          Sports Landing Page
        </a>
        <a href="https://housing-project-lake.vercel.app/" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">
          <img src="path/to/housing-thumbnail.jpg" alt="Housing Project Thumbnail" className='mb-2' />
          Housing Project
        </a>
        <a href="https://belkins9-ogq7.vercel.app/" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">
          <img src="path/to/belkins-thumbnail.jpg" alt="Belkins Project Thumbnail" className='mb-2' />
          Belkins Project
        </a>
        <a href="https://wedding-landingpage-mu.vercel.app/" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">
          <img src="path/to/wedding-thumbnail.jpg" alt="Wedding Landing Page Thumbnail" className='mb-2' />
          Wedding Landing Page
        </a>
      </div>
    </div>
  );
};

export default Project;
