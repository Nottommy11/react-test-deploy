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
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/flashcards", element: <Flashcards /> },
      { path: "/games", element: <Games /> },
      { path: "/quizzes", element: <Quizzes /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="./img/networking.svg" />
      <title>Nettie</title>
    </head>
    <RouterProvider router={router} />
  </>
);
