import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Question from "./question";

export default function QuestionsSlider({ questions }) {
  const [current, setCurrent] = useState(0);
  const length = questions.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(questions) || questions.length <= 0) {
    return null;
  }

  return (
    <section className="question-slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div className="question-item">
        {questions.map((question, index) => {
          return (
            <div
              className={index === current ? "question active" : "question"}
              key={index}
            >
              {index === current && (
                <Question
                  question={question}
                  questionNum={index}
                  key={question.id}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
