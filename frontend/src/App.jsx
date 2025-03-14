
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Signup from "./components/auth/Signup";
import Home from './components/Home';
import Login from './components/auth/Login';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import Internships from './components/Internships';
import StudentSignup from "./components/StudentSignup";
import RecruiterSignup from "./components/RecruiterSignup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/internships",
    element: <Internships />,
  },
  {
    path: "/student/signup",
    element: <StudentSignup />,
  },
  {
    path: "/recruiter/signup",
    element: <RecruiterSignup />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default App;
