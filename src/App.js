import React from 'react';
import ScheduleGrid from './components/ScheduleGrid'; // Adjust the path as needed
import './App.css'; // Optional: Custom global styling

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
