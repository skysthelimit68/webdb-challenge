const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findProjectActions,
    addProject,
    //updateProject,
    //removeProject
}

function find() {
    return db('project')
}

async function findById(id) {
    const project = await db('project')
    .where( { id })
    .first()
    const actions = await findProjectActions(id);
    return { project, actions}
}


function addProject(project) {
    return db('project')
    .insert(project, 'id')
}

function findProjectActions(id) {
    return db('action')
    .where({ 'project_id': id})
}