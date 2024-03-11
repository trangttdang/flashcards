import React, { useState, useEffect } from "react";
import '../assets/css/flashcard.css';

const FlashCard = ({ flashcard, isFrontShown, isChanged }) => {
  // State variable for the front and back of the flashcard
  const [isShown, setIsShown] = useState(isFrontShown);

  // Function to toggle between showing the front and back of the flashcard
  const toggleCard = () => {
    setIsShown(!isShown);
  };
  // Ensure the front face is shown by default for next card
  useEffect(() => {
    if (isChanged) {
      setIsShown(true);
    }
  }, [isChanged]);

  return (
    <div className={`flip-card ${isShown ? '' : 'flipped'}`} onClick={toggleCard}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {flashcard.song}
        </div>
        <div className="flip-card-back">
          {flashcard.group}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
