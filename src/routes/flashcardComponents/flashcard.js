import React, { useState, useRef } from "react";

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  return (
    <div
      onClick={() => setFlip(!flip)}
      className={`flashcard-item ${flip ? "flip" : ""}`}
    >
      <div className="flashcard-front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flashcard-back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
