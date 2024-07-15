import { Home, User, Info, Lock, Mail, Shield, Share2, Heart, HelpCircle } from 'lucide-react';

const K = {
  NAVLINKS: [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Login', path: '/login', icon: User },
    { name: 'Sign Up', path: '/signup', icon: User },
  ],
  DASHLINKS: [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Projects', path: '/dashboard/projects', icon: User },
    { name: 'Skills', path: '/dashboard/skills', icon: Info },
    { name: 'Experience', path: '/dashboard/experience', icon: Lock },
    { name: 'Achievements', path: '/dashboard/achievements', icon: Mail },
    { name: 'Settings', path: '/dashboard/settings', icon: Shield },
  ],
  SETTINGS: [
    { name: 'Main Dashboard', path: '/settings', icon: Home },
    { name: 'Edit Profile', path: '/settings/edit-profile', icon: User },
    { name: 'Personal Info', path: '/settings/personal-info', icon: Info },
    { name: 'Account Management', path: '/settings/account', icon: Lock },
    { name: 'Email Updates', path: '/settings/email', icon: Mail },
    { name: 'Privacy', path: '/settings/privacy', icon: Shield },
    { name: 'Social Media', path: '/settings/social', icon: Share2 },
    { name: 'Interests', path: '/settings/interests', icon: Heart },
    { name: 'Help', path: '/settings/help', icon: HelpCircle },
  ],
};

export default K;