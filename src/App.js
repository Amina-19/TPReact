// src/App.js
import React from 'react';
import logo from './logopelotita.png';
import './App.css';
import { Footer } from './components/Footer';
import AdivinaContainer from './components/AdivinaContainer';
import { Header } from './components/Header';
import Adivinanza from './components/Adivinanza';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>
      
      <main>
        <h1>Adivinanzas</h1>
        <Adivinanza />
        <AdivinaContainer />
      </main>

      <Footer />
    </div>
  );
}

export default App;
