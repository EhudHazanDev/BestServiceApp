import { storageService } from "./generalService/storageService"

export const TableService = {
    query,
    add,
    getById,
    update,
    remove
}

// export const Tables = {
// _Id: "1",
// waiterId: "0",
// }

const entityType = "Tables";


function query(filterObj = null) {
    let entities = storageService.query(entityType);
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

function add(newTable) {
    const Table = storageService.post(entityType, newTable);
    return newTable;
}

function getById(tableId) {
    const table = storageService.getById(entityType, tableId)
    return table;
}

function update(updateTable) {
    const Table = storageService.put(entityType, updateTable)
    return Table;
}

function remove(tableId) {
    const newTables = storageService.remove(tableId);
    return newTables;
}