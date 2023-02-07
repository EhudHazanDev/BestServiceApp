import React, { useState, createContext, useContext } from "react";
import { TableService } from "../services/tableService";
import { WaiterService } from "../services/waiterService";
import { CustomerRequestService } from "../services/customerRequestService";
import { TaskService } from "../services/taskService";
import { TaskList } from "../cmps/TaskList";
import { Tasks } from "../pages/Tasks";

export const TaskPreview = (props) => {
  // const table = TableService.getById(task.tableId);
  const request = CustomerRequestService.getById(props.task.requestId);
  const waiter = WaiterService.getById(props.task.waiterId);

  const UpdateStatus = (event) => {
    props.task.isDone = !props.task.isDone;
    TaskService.update(props.task);
    props.rePrintTasks();
    event.preventDefault();
  };

  return (
    <div className="taskPreview">
      <div className="columnHeaders"></div>
      <p>{request.type}</p>
      <p>{props.task.tableId}</p>
      <p>{waiter.fullName}</p>
      <p>{props.task.createdAt}</p>
      <p
        className="doneBtn"
        onClick={(event) => {
          UpdateStatus(event);
        }}
      >
        {props.task.isDone ? "Done" : "Waiting For Service"}{" "}
      </p>
    </div>
  );
};
