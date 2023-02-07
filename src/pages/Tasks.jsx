import React, {useState , useEffect} /*, {createContext}*/ from "react";
import { FilterTasks } from "../cmps/FilterTasks";
import { TaskList } from "../cmps/TaskList";
import { TaskService } from "../services/taskService";
import { WaiterService } from "../services/waiterService";

export const Tasks = () => {
  const [filteredTasks, setFilteredTasks] = useState(null);
  const [savedFilter, setSavedFilter] = useState("");
  
  // const TaskskContext = createContext()

  useEffect(() => {
    const tasks = TaskService.query();
    setFilteredTasks(tasks);
  }, []);

  const filterByFullName = (entities,fullName)=>{
    let tasksByFullName = [];
    const waiterIds= WaiterService.query(fullName).map(el=>el._id);
    waiterIds.forEach(waiterId => {
      const taskByWaier = TaskService.query(entities,{waiterId});
      tasksByFullName = [...tasksByFullName , ...taskByWaier]
    });
    return tasksByFullName; 
  }
  
  const setFilter=(filter)=>{
    setSavedFilter(filter);
    let newFilteredTasks= TaskService.query();
    if (filter.requestId>0) {
       newFilteredTasks = TaskService.query(newFilteredTasks,{requestId: filter.requestId});
    }
    if (filter.tableId>0) {
      newFilteredTasks = TaskService.query(newFilteredTasks,{tableId: filter.tableId});
    }
    if (filter.fullName!="") {
      newFilteredTasks = filterByFullName(newFilteredTasks,{fullName:filter.fullName});
    }
    setFilteredTasks(newFilteredTasks);
  }
  const rePrintTasks=()=>{
    const updatedTasks = setFilter(savedFilter);
  }

  return (
    // <TaskskContext.Provider value={tasks}>
    <div className="Tasks">
      <FilterTasks setFilter={setFilter}/>
      {filteredTasks && <TaskList rePrintTasks={rePrintTasks} tasks={filteredTasks} />}
    </div>
    // </TaskskContext.Provider>
  );
};
