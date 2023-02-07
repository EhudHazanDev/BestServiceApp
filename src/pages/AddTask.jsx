import React, { useState } from "react";
import { TableService } from "../services/tableService";
import { TaskService } from "../services/taskService";

export const AddTask = () => {
  const [requestId, setRequestId] = useState(1);
  const [tableId, setTableId] = useState(1);

  const createTask = (event) => {
    const tableEntity = TableService.getById(tableId);
    const task = {
      requestId: requestId,
      tableId: tableId,
      isDone: false,
      createdAt: new Date(),
      waiterId: tableEntity.waiterId,
    };
    let newTask = TaskService.add(task);

    console.log(TaskService.query());
    event.preventDefault();
  };

  return (
      <form className="addTask">
        <div>
          <label>Insert request id:</label>
          <input
            type="number"
            name="requestId"
            min="1"
            max="7"
            value={requestId}
            onChange={(event) => {
              if((event.target.value>=1)&&(event.target.value<=7)){
              setRequestId(Math.floor(event.target.value));
              }else{
                alert("Request value can be between 1 to 7 \n1 - cutlery\n2 - bread\n3 - drink\n4 - Salad\n5 - Appetizer\n6 - Main Course\n7 - Dessert");
              }
            }}
          />
        </div>
        <div>
          <label>Insert table number:</label>
          <input
            type="number"
            name="tableId"
            min="1"
            max="1000"
            value={tableId}
            onChange={(event) => {
              if((event.target.value>=1)&&(event.target.value<=4)){
                setTableId(Math.floor(event.target.value));
                }else{
                  alert("Table number can be between 1 to 4");
                }
            }}
          />
        </div>
        <div>
          <button
            onClick={(event) => {
              createTask(event);
            }}
          >
            Create task
          </button>
        </div>
      </form>
  );
};

{
  /* <form className="AddTask" name="AddTaskForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
        <label for="TableNo">Please insert your table number: </label>

        <input
          type="number"
          id="TableNo"
          name="TableNo"
          min="0"
          max="100"
        ></input>

        <fieldset>
          <legend>Select a kind of request:</legend>
          <div>
            <input
              type="radio"
              id="cutlery"
              name="cutlery"
              value="cutlery"
            ></input>
            <label for="Choice1">Cutlery</label>
          </div>

          <div>
            <input
              type="radio"
              id="bread"
              name="bread"
              value="bread"
            ></input>
            <label for="Choice2">Bread</label>
          </div>

          <div>
            <input
              type="radio"
              id="drink"
              name="drink"
              value="drink"
            ></input>
            <label for="Choice3">Drink</label>
          </div>

          <div>
            <input
              type="radio"
              id="Salad"
              name="Salad"
              value="Salad"
            ></input>
            <label for="Choice4">Salad</label>
          </div>

          <div>
            <input
              type="radio"
              id="Appetizer"
              name="Appetizer"
              value="Appetizer"
            ></input>
            <label for="Choice5">Appetizer</label>
          </div>

          <div>
            <input
              type="radio"
              id="Main Course"
              name="Main Course"
              value="Main Course"
            ></input>
            <label for="Choice6">Main Course</label>
          </div>

          <div>
            <input
              type="radio"
              id="dessert"
              name="dessert"
              value="dessert"
            ></input>
            <label for="Choice7">Dessert</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
      <pre id="log"></pre> */
}
