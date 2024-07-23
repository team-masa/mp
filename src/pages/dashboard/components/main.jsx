// src/pages/dashboard/components/Dashboard.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Outlet ,Navigate} from 'react-router-dom';
import { Home, Briefcase, Star, Book, Award, Settings, ChevronFirst, ChevronLast, MoreVertical, LogOut } from 'lucide-react';
import K from '../../../constants';
import { toast } from 'react-toastify';
import { apiGetProfile } from '../../../services/profile';
import { getToken } from '../../../services/config';
import { apiLogout } from '../../../services/auth';

const Dashboard = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const particlesContainerRef = useRef(null);
  const [profile, setProfile] = useState();

  const token = getToken();

  const getUserProfile = async () => {
    try {
      const response = await apiGetProfile();
      const userProfileData = response?.data.profile;
      setProfile(userProfileData);
    } catch (error) {
      toast.error("An error occured");
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
  }, []);

  if (!token) {
    return <Navigate to="/login" />}

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/home');
    }

    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize particles.js
      if (particlesContainerRef.current && window.particlesJS) {
        window.particlesJS(particlesContainerRef.current.id, {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab', // Can also be 'bubble' or 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push', // Can also be 'remove'
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [location, navigate]);

  const handleLogout = async () => {
    
    try {
        await apiLogout();
        toast.success("Logged out successfully");
        navigate("/login");
      } catch (error) {
        toast.error("An error occured");
      }
  
  };

  return (
    <div className="flex h-screen relative">
      <div
        ref={particlesContainerRef}
        id="particles-js"
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#282A3A', // Use your preferred color
        }}
      ></div>
      <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} bg-black bg-opacity-70 text-white transition-all duration-300 p-4 z-10`}>
        <nav className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${expanded ? '' : 'hidden'}`}>Dashboard</h2>
              <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-[#735F32] hover:bg-[#C69749]">
                {expanded ? <ChevronFirst size={20} /> : <ChevronLast size={20} />}
              </button>
            </div>
            <ul className="flex-1 space-y-2">
              {K.DASHBOARD_LINKS.map((item) => (
                <SidebarItem
                  key={item.path}
                  icon={<item.icon size={20} />}
                  text={item.name}
                  onClick={() => navigate(item.path)}
                  expanded={expanded}
                  active={location.pathname === item.path}
                />
              ))}
            </ul>
          </div>
          <div className="border-t border-[#565470] p-3">
            <div className={`flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
              <div className={`flex items-center gap-2 ${expanded ? '' : 'hidden'}`}>
                <img
                  src="https://ui-avatars.com/api/?background=F50081&color=fff&name=John+Doe"
                  alt=""
                  className="w-10 h-10 rounded-md"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-gray-300">johndoe@example.com</span>
                </div>
              </div>
              <button onClick={handleLogout} className="p-1.5 rounded-lg bg-[#735F32] hover:bg-[#C69749]" title="Logout">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 relative z-10">
        <Outlet context={[profile, setProfile]}/> {/* This will render the child routes */}
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, text, onClick, expanded, active = false }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center p-2 px-2 rounded-lg w-full text-left ${active ? 'bg-[#C69749]' : 'hover:bg-[#735F32]'}`}
      >
        {icon}
        <span className={expanded ? 'ml-3' : 'hidden'}>{text}</span>
      </button>
    </li>
  );
};

export default Dashboard;
