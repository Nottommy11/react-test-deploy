import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
//import { Login, loginNeeded } from "./components/login";
//import Login from "./components/login";

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
/* 
let login = null;

window.addEventListener("load", () => {
  fetchLogins();
});

function getLogin() {
  try {
    if (
      localStorage.getItem("username") === null ||
      localStorage.getItem("email") === null
    ) {
      return null;
    } else {
      login = {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
      };
      return true;
    }
  } catch (err) {
    console.log("LOCAL STORAGE ERROR: " + err);
  }
}

async function fetchLogins() {
  const response = await fetch(
    "https://nettie-test-api-deploy.herokuapp.com/loginData"
  ).catch((err) => {
    console.log("API ERROR: " + err);
  });
  const data = await response.json();
  return data;
}

function checkLogin(logins) {
  if (login === null) {
    login = getLogin();
    if (login != null) {
      return false;
    }

    if (!logins) {
      logins = fetchLogins();
    }

    for (let i = 0; i < logins.length; i++) {
      if (
        logins[i].username === login.username &&
        logins[i].email === login.email
      ) {
        return true;
      }
    }
    return false;
  }
} */

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  //      {checkLogin() && loginNeeded ? null : <Login />}
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
