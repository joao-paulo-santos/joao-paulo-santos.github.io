import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import App from './App.jsx'
import './index.css'
import Projects from "./routes/Projects.jsx";
import Project from "./routes/Project.jsx";
import Navbar from "./components/navbar/navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: (
            <Navbar>
                <ErrorPage />
            </Navbar>),
        children: [
            {
                path: "Projects/",
                element: <Projects />
            },
            {
                path: "Projects/:id",
                element: <Project />
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
