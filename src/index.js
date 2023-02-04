import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Flashcards from "./routes/flashcards";
import Games from "./routes/games";
import Quizzes from "./routes/quizzes";
import ErrorPage from "./routes/error";

import "./index.css";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/react-test-deploy/", element: <Home /> },
      { path: "/react-test-deploy/", element: <About /> },
      { path: "/react-test-deploy/", element: <Contact /> },
      { path: "/react-test-deploy/", element: <Flashcards /> },
      { path: "/react-test-deploy/", element: <Games /> },
      { path: "/react-test-deploy/", element: <Quizzes /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
