//Date: 11 February 2025
//Name: Kyle McColgan
//Filename: App.js
//Description: Main entry point for the React schedule site.

import React from 'react';
import ScheduleGrid from './components/ScheduleGrid';
import './App.css'; //Custom global styling.

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Daily Planner</h1>
      </header>
      <main className="app-main">
        <ScheduleGrid />
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} My Schedule App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
