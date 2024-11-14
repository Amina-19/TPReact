// src/components/AdivinaContainer.js
import React, { useState, useEffect } from 'react';
import Adivinanza from './Adivinanza';
import styles from '../styles/AdivinaContainer.module.css';

const AdivinaContainer = () => {
  const [riddles, setRiddles] = useState([]);

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const response = await fetch('/adivinanzas.json'); // Actualizamos la ruta
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        console.log(data)
        
        setRiddles(data); // Guardamos las adivinanzas en el estado
      } catch (error) {
        console.error("Error al cargar las adivinanzas:", error);
      }
    };

    fetchRiddles();
  }, []);

  return (
    <div className={styles.container}>
      {riddles.map((riddle) => (
        <Adivinanza
          key={riddle.number}
          number={riddle.number}
          question={riddle.question}
          answer={riddle.answer}
        />
      ))}
    </div>
  );
};

export default AdivinaContainer;
