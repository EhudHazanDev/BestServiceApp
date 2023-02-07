import { storageService } from "./generalService/storageService"

export const WaiterService = {
    query,
    add,
    getById,
    update,
    remove
}

// Waiters = {
//       waiterId: "1",
//       full Name: "Ehud Hazan",
//       Address: {
//         street: "Ber Nisan 30",
//         city: "Beer Sheva",
//         Cuntry: "Israel",
//       },
//       phone: "0585888123",
//       email: "ehudhazandev@gmail.com",
//     }

const entityType = "Waiters";

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


function add(newWaiter) {
    const waiters = storageService.post(entityType, newWaiter);
    return waiters;
}

function getById(waiterId) {
    const waiter = storageService.getById(entityType, waiterId)
    return waiter;
}

function update(updateWaiter) {
    const waiter = storageService.put(entityType, updateWaiter)
    return waiter;
}

function remove(waitereId) {
    const newWaiters = storageService.remove(waitereId);
    return newWaiters;
}