import React from "react";
import Task from "../components/Task";
import { v4 as uuid } from 'uuid';

function ActiveTasks(props) {
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

  return(
    <div id="active-tasks">
      <h3>Active Tasks:</h3>
      {generateTasks()}
    </div>
  )
};

export default ActiveTasks;