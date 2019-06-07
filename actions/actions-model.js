const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    addAction,
    updateAction,
    removeAction
}

function find() {
    return db('action')
}

function findById(id) {
    return db('action')
    .where({ id })
    .first();
}

function addAction(action) {
    return db('action')
    .insert(action, 'id')
}

function updateAction(id, changes) {
    return db('action')
    .update(changes)
    .then( count => {
        if(count > 0) {
            return findById(id)
        } else {
            return null;
        }
    })
}

function removeAction(id) {
    return db('action')
    .where({ id })
    .del()
}



