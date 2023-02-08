import React from "react";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">About</div>
        <div className="about-wrapper">
          <div className="about-contacts">
            <div className="about-contact-title">Contact Information</div>
            <div className="about-contact">
              <div className="about-contact-name">Jeremy Wynia</div>
              <a className="about-contact-email" href="mailto:jewynia1@wsc.edu">
                jewynia1@wsc.edu
              </a>
            </div>
            <div className="about-contact">
              <div className="about-contact-name">Dakota Gullicksen</div>
              <a className="about-contact-email" href="mailto:kogull01@wsc.edu">
                kogull01@wsc.edu
              </a>
            </div>
            <div className="about-contact">
              <div className="about-contact-name">Thomas Marxsen</div>
              <a className="about-contact-email" href="mailto:thmarx01@wsc.edu">
                thmarx01@wsc.edu
              </a>
            </div>
          </div>
          <div className="about-desc">
            <div className="about-desc-title">About This Project</div>
            <div className="about-desc-text">
              This project was created to help students learn about Networking
              I, II, III, and IV concepts through the use of flashcards, games,
              and quizzes.
            </div>
            <div className="about-desc-text">
              For further information and documentation, please see the GitHub
              repository below.
            </div>
            <div className="about-desc-links">
              <a
                className="about-desc-link"
                href="https://github.com/Nottommy11/react-test-deploy"
                target={"_blank"}
                rel="noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
