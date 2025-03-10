import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import { Button } from './components/ui/button'
import Signup from "./components/auth/Signup";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
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
