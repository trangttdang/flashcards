import React, { useState } from "react";
import FlashCard from "./FlashCard";

const FlashcardContainer = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };
  console.log(flashcards[0])
  console.log(currentCardIndex)
  return (
    <div>
      <FlashCard {...flashcards[currentCardIndex]} />
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default FlashcardContainer;
