import { storageService } from "./generalService/storageService"

export const TaskService = {
    query,
    add,
    getById,
    update,
    remove
}

// task{
//  _id: "T001",
//  waiterId: "1",
//  requestId: "1",
//  createdAt: new Date(),
//  isDone: false,
// }

const entityType = "Tasks";

function query(filteredTasks = null, filterObj = null) {
    let entities = filteredTasks;
    if (!entities) entities = storageService.query(entityType);
    if (filterObj) entities = _filter(entities, filterObj);
    return entities;
}

const _filter = (entities, filterObj) => {
    const keys = Object.keys(filterObj);
    let filterdEntities = entities;
    keys.forEach((key) => {
        if (filterObj[key]) {
            filterdEntities = filterdEntities.filter((el) => {
                if (typeof el[key] == "string") {
                    return el[key].toLowerCase().includes(filterObj[key].toLowerCase());
                }
                return el[key] === filterObj[key];
            });
        }
    });
    return filterdEntities;
};

function add(newTask) {
    const newTasks = storageService.post(entityType, newTask, 4);
    return newTasks;
}

function getById(taskId) {
    const task = storageService.getById(entityType, taskId)
    return task;
}

function update(updateTask) {
    const updateTasks = storageService.put(entityType, updateTask)
    return updateTasks;
}

function remove(taskId) {
    const newTasks = storageService.remove(taskId);
    return newTasks;
}