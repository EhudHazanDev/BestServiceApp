import React, { useState } from "react";

export const FilterTasks = ({ setFilter }) => {
  const [tableId, setTable] = useState(0);
  const [requestId, setRequestId] = useState(0);
  const [fullName, setFullName] = useState("");

  const doFilter = (event) => {
    const filterObject = {
      requestId,
      tableId,
      fullName,
    };
    setFilter(filterObject);
    event.preventDefault();
  };

  return (
    <div className="filterTasks">
      <form className="formTasks">
        <label>Insert request id:</label>
        <input
          type="number"
          name="requestId"
          value={requestId}
          onChange={(event) => {
            setRequestId(event.target.value);
            console.log(tableId,requestId,fullName);  //why seems that set wasnt done!?
            doFilter(event);
          }}
        />
        <label>Insert table number:</label>
        <input
          type="number"
          name="tableId"
          value={tableId}
          onChange={(event) => {
            setTable(event.target.value);
            // doFilter(event);
          }}
        />
        <input
          type="text"
          name="waiterName"
          placeholder="Insert waiter name"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
            // doFilter(event);
          }}
        />
        <button
          onClick={(event) => {
            doFilter(event);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
