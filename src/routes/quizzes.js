import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import QuestionSlider from "./quizzesComponents/questionSlider";

function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [concepts, setConcept] = useState([]);
  const [displayCard, setDisplayCard] = useState(false);

  const handleCardClick = () => setDisplayCard(!displayCard);

  const closeCard = () => setDisplayCard(false);

  const conceptEl = useRef();

  useEffect(() => {
    setConcept(["Fundies 1", "Fundies 2", "Module 1", "Module 2"]);
  }, []);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://nettie-test-api-deploy.herokuapp.com/questionData/${conceptEl.current.value.replace(
          " ",
          ""
        )}`
      )
      .then((res) => {
        setQuizzes(
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
      <section id="quizzes">
        <div className="quizzes-container">
          <div className="quizzes-header">Quizzes</div>
          <div className="quizzes-wrapper">
            {displayCard ? (
              <>
                <FaTimes className="quizzes-close-icon" onClick={closeCard} />
                <QuestionSlider questions={quizzes} />
              </>
            ) : (
              <form className="quizzes-form" onSubmit={handleSubmit}>
                <div className="quizzes-form-group">
                  <label htmlFor="quizzes-difficulty">Concepts</label>
                  <select id="quizzes-difficulty" ref={conceptEl}>
                    {concepts.map((concept) => {
                      return (
                        <option value={concept} key={concept}>
                          {concept}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* 
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
                 */}
                <div className="quizzes-form-group">
                  <button className="quizzes-submit-btn">Generate</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
