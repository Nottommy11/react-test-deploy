import React, { createElement } from "react";
import networkCables from "../img/network-cables.jpg";

function createCard({ title, description, img }) {
  return createElement(
    "div",
    { className: "grid-card" },
    createElement("img", {
      className: "grid-card-img",
      src: img,
      alt: title,
    }),
    createElement(
      "div",
      { className: "grid-card-text" },
      createElement("div", { className: "grid-card-title" }, title),
      createElement("div", { className: "grid-card-description" }, description)
    )
  );
}

function createCards(num) {
  const cards = [];
  for (let i = 0; i < num; i++) {
    cards.push(
      createCard({
        title: "Network Cables",
        description: "Learn about the OSI Model and TCP/IP",
        img: networkCables,
      })
    );
  }
  return cards;
}

export default function Home() {
  return (
    <section id="home">
      <div className="grid-header">Recently Added!</div>
      <div className="grid-container">
        <div className="grid-title">Networking I Concepts</div>
        <div className="grid-wrapper">{createCards(8)}</div>
        <div className="grid-title">Networking II Concepts</div>
        <div className="grid-wrapper">{createCards(4)}</div>
        <div className="grid-title">Networking III Concepts</div>
        <div className="grid-wrapper">{createCards(4)}</div>
        <div className="grid-title">Networking IV Concepts</div>
        <div className="grid-wrapper">{createCards(8)}</div>
      </div>
    </section>
  );
}
