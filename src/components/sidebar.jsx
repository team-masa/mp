// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import K from '../constants';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} bg-[#3F3D56] text-white transition-all duration-300`}>
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-[#F50081] hover:bg-[#D4007A]"
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          {K.DASHLINKS.map((item) => (
            <SidebarItem
              key={item.path}
              icon={<item.icon size={24} />}
              text={item.name}
              link={item.path}
              expanded={expanded}
            />
          ))}
        </ul>

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
            <MoreVertical size={24} className={`${expanded ? '' : 'hidden'}`} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, text, link, expanded }) => {
  return (
    <li>
      <Link
        to={link}
        className={`
          relative flex items-center py-3 px-3 my-1
          font-medium rounded-lg cursor-pointer
          transition-colors group
          hover:bg-[#F50081]
        `}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3 text-lg" : "w-0"}`}>
          {text}
        </span>
        {!expanded && (
          <div className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-[#F50081] text-white text-base
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}>
            {text}
          </div>
        )}
      </Link>
    </li>
  );
};

export default Sidebar;