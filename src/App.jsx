// src/App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preview from "./pages/preview";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard/components/main";
import HomeContent from "./pages/dashboard/components/homeContent";
import ProjectsContent from "./pages/dashboard/components/projectsContent";
import SkillsContent from "./pages/dashboard/components/skillsContent";
import ExperienceContent from "./pages/dashboard/components/experienceContent";
import AchievementsContent from "./pages/dashboard/components/achievementsContent";
import VolunteeringContent from "./pages/dashboard/components/volunteerContent";
import EducationForm from "./pages/dashboard/components/educationForm";
import SettingsPage from "./pages/dashboard/components/settings";

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import ContactContent from "./pages/landing/components/contact";
import AuthLayout from "./layouts/authLayout";
import { apiGetUserDetails } from "./services/preview";
import { toast } from "react-toastify";
import Profile from "./pages/dashboard/components/settings/components/profile";
import PersonalInfo from "./pages/dashboard/components/settings/components/personalInfo";
import AccountManagement from "./pages/dashboard/components/settings/components/accountManagement";
import EmailUpdates from "./pages/dashboard/components/settings/components/emailUpdates";
import Privacy from "./pages/dashboard/components/settings/components/privacy";
import Socials from "./pages/dashboard/components/settings/components/socials";
import Interests from "./pages/dashboard/components/settings/components/interests";
import Help from "./pages/dashboard/components/settings/components/help";

// import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "home", element: <HomeContent /> },
      { path: "education", element: <EducationForm /> },
      { path: "projects", element: <ProjectsContent /> },
      { path: "skills", element: <SkillsContent /> },
      { path: "experiences", element: <ExperienceContent /> },
      { path: "achievements", element: <AchievementsContent /> },
      { path: "volunteering", element: <VolunteeringContent /> },
    ],
  },
  {
    path: "/dashboard/settings",
    element: <SettingsPage />,
    children: [
      { index: true, element: <Profile /> },
      { path: "personal", element: <PersonalInfo /> },
      { path: "account", element: <AccountManagement /> },
      { path: "email", element: <EmailUpdates /> },
      { path: "privacy", element: <Privacy /> },
      { path: "socials", element: <Socials /> },
      { path: "interests", element: <Interests /> },
      { path: "help", element: <Help /> },
    ],
  },
  {
    path: "preview/:username",
    element: <Preview />,
    loader: async ({ params }) => {
      const username = params.username;
      try {
        const response = await apiGetUserDetails(username);
        const userProfileData = response?.data.user;
        return userProfileData;
      } catch (error) {
        toast.error("An error occured");
        return null;
      }
    },
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactContent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
