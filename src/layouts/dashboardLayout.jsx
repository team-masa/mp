// src/components/DashboardLayout.jsx
import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { apiGetProfile } from "../../../services/profile";
import { useEffect, useState } from "react";
import { getToken } from "../../../services/config";
import { toast } from "react-toastify";

const DashboardLayout = () => {
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
  // }
  // const getAvatar = () => {
  //   if (!profile) return "N/A";
  //   const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
  //   return initials.toUpperCase();
  // };
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className=" w-full">
        <div className="flex px-16 bg-white py-5 shadow items-center">
         
          {/* <Link
            to="/dashboard/profile"
            className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span>
          </Link> */}
        </div>
      <main className="flex-1 overflow-y-auto p-8">
      <Outlet context={[profile, setProfile]} />
      </main>
    </div>
    </div>
  );
};

export default DashboardLayout;