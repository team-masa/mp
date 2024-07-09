import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import Landing from "./pages/landing";
import SignIn from "./pages/auth/signIn";
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
      path: "/signin",
      element: <SignIn />

    },
    {
      path: "/signup",
      element: <SignUp />
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App