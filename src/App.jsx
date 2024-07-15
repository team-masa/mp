import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preview from "./pages/preview";
import Landing from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import SignUp from "./pages/auth/signUp";
import Dashboard from "./pages/dashboard/components/main";
import Experiences from "./pages/dashboard/components/experiences";
import SettingsPage from "./pages/dashboard/components/settings";


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
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
  {
    path: "/experience",
    element: <Experiences />
  },
  {
    path: "/settings",
    element: <SettingsPage /> 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
