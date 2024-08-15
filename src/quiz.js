import React, { useState } from 'react';
import AlphabetCard from './AlphabetCard';

const Quiz = () => {
  // List of Tamil alphabets and their pronunciations
  const tamilAlphabets = [
    { letter: 'அ', pronunciation: 'a' },
    { letter: 'ஆ', pronunciation: 'aa' },
    { letter: 'இ', pronunciation: 'i' },
    { letter: 'ஈ', pronunciation: 'ii' },
    { letter: 'உ', pronunciation: 'u' },
    { letter: 'ஊ', pronunciation: 'uu' },  
    { letter: 'எ', pronunciation: 'e' },
    { letter: 'ஏ', pronunciation: 'ee' },
    { letter: 'ஐ', pronunciation: 'ai' },
    { letter: 'ஒ', pronunciation: 'o' },
    { letter: 'ஓ', pronunciation: 'oo' },
    { letter: 'ஔ', pronunciation: 'au' },
    // Add more letters as needed
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === tamilAlphabets[currentQuestion].pronunciation) {
      setScore(score + 1);
    }
    if (currentQuestion < tamilAlphabets.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {/* {showResult ? (
        <h2>Your Score: {score}</h2>
      ) : ( */}
        <div>
          <AlphabetCard letter={tamilAlphabets[currentQuestion].letter} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Enter pronunciation"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      {/* )} */}
    </div>
  );
};
export default Quiz