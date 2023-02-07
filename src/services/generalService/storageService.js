export const storageService = {
    query,
    getById,
    post,
    put,
    remove,
    removeById,
    newEntity,
    deleteStorage,
}

function query(entityType) {
    const entities = JSON.parse(localStorage.getItem(entityType))
    return entities;
}

function getById(entityType, entityId) {
    return query(entityType).filter(el => el._id == entityId)[0];
}

function post(entityType, newEntity, idLength) {
    newEntity._id = _generateId(idLength);
    const entities = query(entityType)
    entities.push(newEntity);
    _save(entityType, entities);
    return newEntity;
}

function put(entityType, updateEntity) {
    const entities = query(entityType);
    const index = entities.findIndex(el => el._id === updateEntity._id);
    entities[index] = updateEntity;
    _save(entityType, entities);
    return updateEntity;
}

function remove(entityType, entity) {
    const entities = query(entityType);
    const index = entities.findIndex(el => el._id === entity._id);
    entities.splice(index, 1);
    _save(entityType, entities);
}

function removeById(entityType, entityId) {
    const entities = query(entityType);
    const index = entities.findIndex(el => el._id === entityId);
    entities.splice(index, 1);
    _save(entityType, entities);
    return entities;
}

function newEntity(entityType, entityArr) {
    localStorage.setItem(entityType, JSON.stringify(entityArr));

}

function deleteStorage(params) {
    localStorage.clear();
}

function _save(entityType, newEntity) {
    localStorage.setItem(entityType, JSON.stringify(newEntity));
}

function _generateId(idLength) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let index = 0; index < idLength; index++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length - 1));
    }
    return id;
}