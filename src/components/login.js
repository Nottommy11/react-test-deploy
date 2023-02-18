import React, { useState, useRef, useEffect } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "./login.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const USER_REGEX = /^[a-zA-Z0-9-_]{3,23}$/;

let logins;

async function fetchLogins() {
  const response = await fetch(
    "https://nettie-test-api-deploy.herokuapp.com/loginData"
  ).catch((err) => {
    console.log("API ERROR: " + err);
  });
  logins = await response.json();
}

window.addEventListener("load", () => {
  fetchLogins();
});

export default function Login() {
  const emailRef = useRef();
  const userRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [hasAccount, setHasAccount] = useState(true);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidUser(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    if (hasAccount) {
      emailRef.current.focus();
    } else {
      userRef.current.focus();
    }
  }, [hasAccount]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // If button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = USER_REGEX.test(user);
    if (((!v1 || !v2) && !hasAccount) || (!v1 && hasAccount)) {
      console.log("Invalid Entry");
      return;
    }

    if (hasAccount) {
      logins.forEach((login) => {
        if (login.email === email) {
          localStorage.setItem("username", login.username);
          localStorage.setItem("email", login.email);
          console.log("Login Successful");
          return;
        }
      });
      setHasAccount(false);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="login-modal-bg"></div>
      <div className="login-modal-container">
        <div className="login-modal-header">Login/Register</div>
        <div className="login-modal-wrapper">
          <form className="login-modal-form" onSubmit={handleSubmit}>
            <div className="login-modal-form-group">
              <label htmlFor="email">
                Email:
                <AiFillCheckCircle
                  className={validEmail ? "valid" : "hide"}
                />{" "}
                <AiFillCloseCircle
                  className={validEmail || !email ? "hide" : "invalid"}
                />
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </div>
            {hasAccount ? null : (
              <div className="login-modal-form-group">
                <label htmlFor="username">
                  Username:
                  <AiFillCheckCircle
                    className={validUser ? "valid" : "hide"}
                  />{" "}
                  <AiFillCloseCircle
                    className={validUser || !user ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
              </div>
            )}

            <div className="login-modal-form-group">
              <button className="login-modal-submit-btn">
                {hasAccount ? "Login" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
