import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signUp";
function App() {
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
      path: "/Login",
      element: <Login />

    },
    {
      path: "/signup",
      element: <SignUp />
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App