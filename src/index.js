import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./routes/home";
import About from "./routes/about";
import Profile from "./routes/profile";
import Flashcards from "./routes/flashcards";
import Games from "./routes/games";
import Quizzes from "./routes/quizzes";
import ErrorPage from "./routes/error";

import "./index.css";
import "./styles/gridCards.css";
import "./styles/flashcards.css";
import "./styles/about.css";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/profile", element: <Profile /> },
      { path: "/flashcards", element: <Flashcards /> },
      { path: "/games", element: <Games /> },
      { path: "/quizzes", element: <Quizzes /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//export { login, checkLogin };
