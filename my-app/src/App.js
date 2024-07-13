// U08282838

import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <header className="App-header">
        <FancyText title text="Task Management App" />
      </header>
      <TaskGenerator />
      <footer className="App-footer">
        <FancyText text="© 2024 Task Management App, Andrew Bloodworth" />
      </footer>
    </div>
  );
};

export default App;