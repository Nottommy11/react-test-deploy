import React from "react";
import Login from "../components/login";

export default function Profile() {
  return (
    <>
      <Login />
      <section id="profile">
        <div className="profile-container">
          <div className="profile-header">My Profile</div>
        </div>
      </section>
    </>
  );
}
