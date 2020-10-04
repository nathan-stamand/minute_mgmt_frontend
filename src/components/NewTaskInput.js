import React, { useState } from "react";

function NewTaskInput() {
  const [task, setTask] = useState('');
  const [timer, setTimer] = useState('');

  return (
      <div id="new-task">
      <input id="task-input" type="text" placeholder="add task here"
         maxLength="100" minLength="1" />
      <button id="add-task">+</button>
      <input id="timer-input" type="number" min="0" max="59" placeholder="min." />
    </div>
  )
}

export default NewTaskInput;