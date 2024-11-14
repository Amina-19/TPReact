// src/components/Adivinanza.js
import React, { useState } from 'react';
import styles from '../styles/Adivinanza.module.css';

const Adivinanza = ({ number, question, answer }) => {
  const [revealed, setRevealed] = useState(false);

  // Verifica que los datos estén completos antes de renderizar el componente
  if (!number || !question || !answer) {
    return null; // No renderiza nada si falta algún dato
  }

  const handleReveal = () => {
    setRevealed(!revealed);
  };

  return (
    <div className={styles.adivinaBox}>
      <h3>{`Adivinanza #${number}`}</h3>
      <p>{question}</p>
      {revealed && <p className="answer">{answer}</p>}
      <button onClick={handleReveal} className={styles.revealButton}>
        👁️ {revealed ? 'Ocultar' : 'Revelar'}
      </button>
    </div>
  );
};

export default Adivinanza;
