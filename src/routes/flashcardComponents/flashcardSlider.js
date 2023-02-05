import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Flashcard from "./flashcard";

export default function FlashcardSlider({ flashcards }) {
  const [current, setCurrent] = useState(0);
  const length = flashcards.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(flashcards) || flashcards.length <= 0) {
    return null;
  }

  return (
    <section className="flashcard-slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {flashcards.map((flashcard, index) => {
        return (
          <div
            className={index === current ? "flashcard active" : "flashcard"}
            key={index}
          >
            {index === current && (
              <Flashcard flashcard={flashcard} key={flashcard.id} />
            )}
          </div>
        );
      })}
    </section>
  );
}
