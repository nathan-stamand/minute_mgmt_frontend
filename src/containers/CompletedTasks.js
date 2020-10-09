import React from "react";
import Task from "../components/Task";
import { v4 as uuid } from 'uuid';

function CompletedTasks(props) {
  function createTask(task) {
    return <Task key={uuid()} attr={task} />
  }


  function generateTasks() {
    let taskList = []
    if (props.tasks ) {
      for (const task of props.tasks) {
        taskList.push(createTask(task))
      }
    }
    return taskList;
  }

  return (
    <div id="completed-tasks">
      <h3>Completed Tasks:</h3>
      {generateTasks()}
    </div>
  )
};

export default CompletedTasks;