import { Tasks, Waiters, Tables, CustomerRequests } from "../../data/dummyData";
import { storageService } from "./storageService";

export const dataService = {
    initData,
    removeData,
}

function initData() {
    storageService.newEntity("Tasks", Tasks);
    storageService.newEntity("Waiters", Waiters);
    storageService.newEntity("Tables", Tables);
    storageService.newEntity("CustomerRequests", CustomerRequests);
}

function removeData(params) {
    storageService.deleteStorage();
}