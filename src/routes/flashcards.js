import React, { useState, useEffect, useRef } from "react";
import FlashcardSlider from "./flashcardComponents/flashcardSlider";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

export default function Flashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [displayCard, setDisplayCard] = useState(false);

  const handleCardClick = () => setDisplayCard(!displayCard);

  const closeCard = () => setDisplayCard(false);

  const difficultyEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    setDifficulties(["easy", "medium", "hard"]);
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  /*   //Questions: https://opentdb.com/api_config.php
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php?category=18", {
        params: {
          amount: amountEl.current.value,
          difficulty: difficultyEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer,
            ];

            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
    handleCardClick();
  } */

  //Questions: https://opentdb.com/api_config.php
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://nettie-test-api-deploy.herokuapp.com/questionData/Mod1")
      .then((res) => {
        setFlashcards(
          res.data.map((questionItem, index) => {
            const answer = decodeString(questionItem.answers[0]);
            const options = [
              ...questionItem.incorrectAnswers.map((a) => decodeString(a)),
              answer,
            ];

            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
    handleCardClick();
  }

  return (
    <>
      <section id="flashcard">
        <div className="flashcard-container">
          <div className="flashcard-header">Flashcards</div>
          <div className="flashcard-wrapper">
            {displayCard ? (
              <>
                <FaTimes className="flashcard-close-icon" onClick={closeCard} />
                <FlashcardSlider flashcards={flashcards} />
              </>
            ) : (
              <form className="flashcard-form" onSubmit={handleSubmit}>
                <div className="flashcard-form-group">
                  <label htmlFor="flashcard-difficulty">Difficulty</label>
                  <select id="flashcard-difficulty" ref={difficultyEl}>
                    {difficulties.map((difficulty) => {
                      return (
                        <option value={difficulty} key={difficulty}>
                          {difficulty}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flashcard-form-group">
                  <label htmlFor="flashcard-amount">Number of questions</label>
                  <input
                    type="number"
                    id="flashcard-amount"
                    min="1"
                    step="1"
                    defaultValue={10}
                    ref={amountEl}
                  />
                </div>
                <div className="flashcard-form-group">
                  <button className="flashcard-submit-btn">Generate</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
