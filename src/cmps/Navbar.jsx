import React from "react";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="menu">
        <li className="navbar-left-item">
          
        <a href="Preveiw tasks" className="Preveiw-tasks">
          Dashboard tasks
          </a>
        </li>
        <li className="navbar-center-item">
        <a href="Add task" className="Add-task">
            Add task
          </a>
        </li>
        <li className="navbar-right-item">
        <a href="Archive" className="Archive">
          Archive
          </a>
        </li>
      </ul>
      <div />
    </div>
  );
};
