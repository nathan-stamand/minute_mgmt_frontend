import React from "react";
import Task from "../components/Task";
import { v4 as uuid } from 'uuid';

function ActiveTasks(props) {
  function createTask(task, subs) {
    return <Task key={uuid()} attr={task} subTasks={subs} />
  }

  function filterSubs(task) {
    if (props.subTasks) {
      return props.subTasks.filter(sub => sub.task_id === task.id)
    }
  }

  function generateTasks() {
    let taskList = []
    if (props.tasks ) {
      for (const task of props.tasks) {
        let subs = filterSubs(task);
        taskList.push(createTask(task, subs))
      }
    }
    return taskList;
  }

  return(
    <div id="active-tasks">
      {generateTasks()}
    </div>
  )
};

export default ActiveTasks;