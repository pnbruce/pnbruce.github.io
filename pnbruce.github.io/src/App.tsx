import React from 'react';
import me2 from './me2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={me2} className="Me" alt = "me"/>
        <p>
          Welcome to Patrick Bruce's website!
        </p>
        <a
          className="App-link"
          href="https://pnbruce.github.io/tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Tic-Tac-Toe
        </a>
        <a
            className="App-link"
            href="https://pnbruce.github.io/html"
            target="_blank"
            rel="noopener noreferrer"
        >
            html Tic-Tac-Toe
        </a>
      </header>
    </div>
  );
}

export default App;
