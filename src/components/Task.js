import React, { useState } from "react";
import {v4 as uuid} from 'uuid';

function Task(props) {
  const [completed, setCompleted] = useState(false);
  const [timerOn, setTimerOn] = useState(false);

  function generateSubs() {
    if (props.subTasks) {
      return props.subTasks.map(sub => {
        return <li key={uuid()}><input type="checkbox" id={sub.id} /><span>{sub.task}</span></li>
      })
    }
  }
  return(
    <div onDoubleClick={() => setCompleted(!completed)} className="task">
      <p>{props.attr.task}</p>
      {generateSubs()}
    </div>
  )
};

export default Task;