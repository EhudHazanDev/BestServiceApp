import { TaskPreview } from "./TaskPreview";
import React, { useState } from "react";
import { Tasks } from "../pages/Tasks";

export const TaskList = (props) => {
  
  // const TaskskContext = createContext()

  return (
    // <TaskskContext.Provider value={tasks}>
    <div className="taskList">
      <div className="headers">
        <h1>Request:</h1>
        <h1>table:</h1>
        <h1>waiter:</h1>
        <h1>Time left:</h1>
        <h1>status:</h1>
      </div>
      <br></br>
        {
        props.tasks.map((task) => 
          (<TaskPreview key={task._id}  task={task} rePrintTasks={props.rePrintTasks} tasks={props.tasks} />
        ))}
    </div>
    // </TaskskContext.Provider>
  );
};
