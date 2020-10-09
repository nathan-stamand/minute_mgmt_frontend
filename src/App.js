import React, { useEffect, useState } from 'react';
import NewTaskInput from "./components/NewTaskInput";
import ActiveTasks from './containers/ActiveTasks';
import CompletedTasks from './containers/CompletedTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (!tasks) {
      fetch('http://localhost:3001/v1/api/tasks')
      .then(res => res.json())
      .then(json => setTasks(json.tasks));
    }
  });

  const activeTasks = tasks ? tasks.filter(task => !task.complete) : null;
  const completedTasks = tasks ? tasks.filter(task => task.complete) : null;

  return (
    <div>
      <h1>MINUTE / MGMT</h1>
      <NewTaskInput />
      <ActiveTasks tasks={activeTasks} />
      <CompletedTasks tasks={completedTasks} />
    </div>
  );
}

export default App;
