// src/App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Preview from './pages/preview';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard/components/main';
import HomeContent from './pages/dashboard/components/homeContent';
import ProjectsContent from './pages/dashboard/components/projectsContent';
import SkillsContent from './pages/dashboard/components/skillsContent';
import ExperienceContent from './pages/dashboard/components/experienceContent';
import AchievementsContent from './pages/dashboard/components/achievementsContent';
import VolunteeringContent from './pages/dashboard/components/volunteerContent';
import EducationForm from './pages/dashboard/components/educationForm';
import SettingsPage, {
  EditProfileContent,
  PersonalInfoContent,
  AccountManagementContent,
  EmailUpdatesContent,
  PrivacyContent,
  SocialMediaContent,
  InterestsContent,
  HelpContent
} from './pages/dashboard/components/settings';

import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
import Preview from "./pages/preview";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "home", element: <HomeContent /> },
      { path: "education", element:<EducationForm /> },
      { path: "projects", element: <ProjectsContent /> },
      { path: "skills", element: <SkillsContent /> },
      { path: "experiences", element: <ExperienceContent /> },
      { path: "achievements", element: <AchievementsContent /> },
      { path: "volunteering", element: <VolunteeringContent /> },
      
    ]
  },
  { path: "/dashboard/settings",
        element: <SettingsPage />,
        children: [
          { path: "profile", element: <EditProfileContent /> },
          { path: "personal", element: <PersonalInfoContent /> },
          { path: "account", element: <AccountManagementContent /> },
          { path: "email", element: <EmailUpdatesContent /> },
          { path: "privacy", element: <PrivacyContent /> },
          { path: "socials", element: <SocialMediaContent /> },
          { path: "interests", element: <InterestsContent /> },
          { path: "help", element: <HelpContent /> },
        ]
      },
  {
    path: "/preview",
    element: <Preview />
  },
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },

]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
