// src/constants/index.jsx
import { Home, User, Info, Lock, Mail, Shield, Share2, Star, Book, Award, Settings, Heart, HelpCircle, Briefcase, Globe,  } from 'lucide-react';

const K = {
  NAVLINKS: [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Login', path: '/login', icon: User },
    { name: 'Sign Up', path: '/signup', icon: User },
  ],

  DASHBOARD_LINKS: [
    { path: '/dashboard/home', name: 'Home', icon: Home },
    { path: '/dashboard/education', name: 'Education', icon: Book },
    { path: '/dashboard/projects', name: 'Projects', icon: Globe },
    { path: '/dashboard/skills', name: 'Skills', icon: Star },
    { path: '/dashboard/experiences', name: 'Experience', icon: Briefcase },
    { path: '/dashboard/achievements', name: 'Achievements', icon: Award },
    { path: '/dashboard/volunteering', name: 'Volunteering', icon: Heart },
    { path: '/dashboard/settings', name: 'Settings', icon: Settings }
  ],

  SETTINGS: [
    { name: 'Edit Profile', path: '/dashboard/settings/profile', icon: User },
    { name: 'Personal Info', path: '/dashboard/settings/personal', icon: Info },
    { name: 'Account Management', path: '/dashboard/settings/account', icon: Lock },
    { name: 'Email Updates', path: '/dashboard/settings/email', icon: Mail },
    { name: 'Privacy', path: '/dashboard/settings/privacy', icon: Shield },
    { name: 'Social Media', path: '/dashboard/settings/socials', icon: Share2 },
    { name: 'Interests', path: '/dashboard/settings/interests', icon: Heart },
    { name: 'Help', path: '/dashboard/settings/help', icon: HelpCircle },
    { name: 'Main Dashboard', path: '/dashboard', icon: Globe },
  ],
};

export default K;
