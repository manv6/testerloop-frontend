import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TimelineProvider } from './hooks/timeline';
import { TimelineControls } from './components/TimelineControls';

function App() {
  return (
    <div className="App">
      <TimelineProvider
        startTime={new Date(Date.parse("2022-01-01T00:00:00Z"))}
        endTime={new Date(Date.parse("2022-01-01T00:05:00Z"))}
      >
        <TimelineControls />
      </TimelineProvider>
    </div>
  );
}

export default App;
