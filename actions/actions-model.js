const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find,
    //findById,
    addAction,
    //updateAction,
    //removeAction
}

function find() {
    return db('action')
}

function addAction(action) {
    return db('action')
    .insert(action, 'id')
}


