import React, { useState } from "react";

function Task(props) {
  const [completed, setCompleted] = useState(false);

  return(
    <div onDoubleClick={() => setCompleted(!completed)} className="task">
      <p>{props.attr.task}</p>
    </div>
  )
};

export default Task;