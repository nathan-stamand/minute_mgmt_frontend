import React from 'react';
import NewTaskInput from "./components/NewTaskInput";
import './App.css';
import ActiveTasks from './containers/ActiveTasks';
import CompletedTasks from './containers/CompletedTasks';

function App() {
  return (
    <div>
      <h1>MINUTE / MGMT</h1>
      <NewTaskInput />
      <ActiveTasks />
      <CompletedTasks />
    </div>
  );
}

export default App;
