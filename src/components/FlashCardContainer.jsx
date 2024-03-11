import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";

const FlashcardContainer = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [prevCardIndex, setPrevCardIndex] = useState(-1); // Initialize with -1

  useEffect(() => {
    // Update the previous card index whenever the current card index changes
    setPrevCardIndex(currentCardIndex);
  }, [currentCardIndex]);

  const handleNextCard = () => {
    let nextIndex = getRandomIndex();
    // Ensure that the next random index is different from the current one
    while (nextIndex === currentCardIndex) {
      nextIndex = getRandomIndex();
    }
    setCurrentCardIndex(nextIndex);
  };
  const getRandomIndex = () => {
    // Generate a random index within the range of flashcards array
    return Math.floor(Math.random() * flashcards.length);
  };

  // Check if the current card index has changed from the previous card index
  const hasChangedToNextCard = currentCardIndex !== prevCardIndex;

  return (
    <div>
      <FlashCard
        flashcard={flashcards[currentCardIndex]}
        isFrontShown={true} // Always show the front face of the current card
        isChanged={hasChangedToNextCard} // Pass whether it's changed
      />
      <button onClick={handleNextCard} class="custom-button">Next</button>
    </div>
  );
};

export default FlashcardContainer;
