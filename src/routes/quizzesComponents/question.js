import React, { useState, useEffect } from "react";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";

export let active = null;

export default function Question({ question, questionNum }) {
  const [isActive, setActive] = useState({ questionNum: 0 });

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionClick = (option) => {
    setSelectedOptions({ ...selectedOptions, [questionNum]: option });
    active = { questionNum: option };
    console.log(selectedOptions + " " + questionNum + " " + option);
  };

  useEffect(() => {
    setActive({ questionNum: selectedOptions[questionNum] });
    console.log(questionNum + " " + selectedOptions[questionNum]);
  }, [questionNum, selectedOptions]);

  return (
    <>
      <div className="question-and-options">
        <div className="question-number">Question {questionNum + 1}</div>
        {question.question}
        <div className="question-options">
          {question.options.map((option, index) => {
            return (
              <button
                className="question-option"
                key={option}
                onClick={() => {
                  setActive({ questionNum: index });
                  handleOptionClick(option);
                }}
              >
                {isActive.questionNum === question.options[index] ? (
                  <BsCheckCircleFill className="filled-square" />
                ) : (
                  <BsCircle className="empty-circle" />
                )}
                <div className="option-text">{option}</div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
