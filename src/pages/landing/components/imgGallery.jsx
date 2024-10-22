import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AaronImg from "../../../assets/images/aaron.jpg";
import SallyImg from "../../../assets/images/sally.jpg";
import MayImg from "../../../assets/images/may.jpg";
import AbImg from "../../../assets/images/abena.jpg";

const projects = [
  { 
    id: 1, 
    title: "Aaron", 
    role: "FULLSTACK DEVELOPER", 
    year: 2021, 
    image: AaronImg,
    previewUrl: "/preview/aaronportuphy"
  },
  { 
    id: 2, 
    title: "Sarah", 
    role: "BACKEND DEVELOPER", 
    year: 2019, 
    image: SallyImg,
    previewUrl: "/preview/Sarah@360"
  },
  { 
    id: 3, 
    title: "Mabel", 
    role: "WEBSITE & DESIGN SYSTEM", 
    year: 2021, 
    image: MayImg,
    previewUrl: "/preview/Maybell"
  },
  { 
    id: 4, 
    title: "Abena", 
    role: "UI DESIGN", 
    year: 2022, 
    image: AbImg,
    previewUrl: "/preview/ACorletey"
  },
];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollPosition = galleryRef.current.scrollTop;
        const newIndex = Math.round(scrollPosition / window.innerHeight);
        setActiveIndex(newIndex);
      }
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="h-full overflow-y-scroll snap-y snap-mandatory bg-[#282A3A]"
    >
      {projects.map((project, index) => {
        const isActive = index === activeIndex;
        const isPrev = index === activeIndex - 1;
        const isNext = index === activeIndex + 1;

        return (
          <div 
            key={project.id} 
            className="h-screen snap-start flex items-center justify-center relative"
          >
            <div 
              className={`transition-all duration-500 ease-in-out ${
                isActive ? 'opacity-100 scale-100' :
                isPrev ? 'opacity-50 scale-95 translate-y-1/4' :
                isNext ? 'opacity-50 scale-95 -translate-y-1/4' :
                'opacity-0 scale-90'
              }`}
            >
              <div className="flex items-center justify-between px-16 max-w-6xl mx-auto">
                <h2 className="text-6xl font-serif w-1/3 text-[#C69749]">
                  {project.title}
                </h2>
                <div className="w-1/2 relative">
                  <Link 
                    to={project.previewUrl}
                    className="block overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[350px] h-auto transform rotate-6 transition-transform duration-300 hover:rotate-2"
                    />
                  </Link>
                  <div className="absolute bottom-3 right-3 text-sm p-2 bg-[#000000] bg-opacity-80 text-[#C69749]">
                    <p>{project.role}</p>
                    <p>© {project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;