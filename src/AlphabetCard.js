import React from 'react';

const AlphabetCard = ({ letter }) => {
  return (
    <div className="alphabet-card">
      <h2>{letter}</h2>
    </div>
  );
};

export default AlphabetCard;