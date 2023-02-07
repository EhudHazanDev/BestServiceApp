import { storageService } from "./generalService/storageService"

export const CustomerRequestService = {
    query,
    getById,
    // add,
    // update,
    // remove
}

// requestId: "7",
// requestType: "dessert",


const entityType = "CustomerRequests";

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


function add(newCustomerRequest) {
    const newCustomerReq = storageService.post(entityType, newCustomerRequest);
    return newCustomerReq;
}

function getById(requestId) {
    const customerRequest = storageService.getById(entityType, requestId)
    return customerRequest;
}

function update(updateCustomerRequest) {
    const updateCustomerReq = storageService.put(entityType, updateCustomerRequest)
    return updateCustomerReq;
}

function remove(requestId) {
    const newCustomerRequests = storageService.remove(requestId);
    return newCustomerRequests;
}