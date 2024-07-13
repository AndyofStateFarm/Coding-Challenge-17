// U08282838

import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <h1>
        <FancyText title text="Task Management App" />
      </h1>
      <TaskGenerator />
      <footer className="footer">
        <p>© 2024 Task Management App, Andrew Bloodworth</p>
      </footer>
    </div>
  );
};

export default App;