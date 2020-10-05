import React, { useEffect } from "react";
import Task from "../components/Task";

function ActiveTasks(props) {
  function createTask(task, subs) {
    return <Task attr={task} subTasks={subs} />
  }

  function filterSubs() {
    
  }

  return(
    <div id="active-tasks">

    </div>
  )
};

export default ActiveTasks;