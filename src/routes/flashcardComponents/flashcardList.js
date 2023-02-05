import React from "react";
import Flashcard from "./flashcard";

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-slider">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}
