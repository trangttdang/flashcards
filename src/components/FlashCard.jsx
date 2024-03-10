import React from "react"
import '../assets/css/flashcard.css'
import { useState } from 'react';
const FlashCard = (flashcard) => {
    // State variables for the front and back of the flashcard
    const [isFrontShown, setIsFrontShown] = useState(true);

    // Function to toggle between showing the front and back of the flashcard
    const toggleCard = () => {
        setIsFrontShown(!isFrontShown);
    };
    console.log(flashcard.song)

    return (
        <div className={`flip-card ${isFrontShown ? '' : 'flipped'}`} onClick={toggleCard}>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                {flashcard.song}
            </div>
            <div className="flip-card-back">
                {flashcard.group}
            </div>
        </div>
    </div>
    )
}

export default FlashCard;