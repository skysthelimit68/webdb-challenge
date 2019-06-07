const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    addAction,
    updateAction,
    removeAction,
    findContext
}

function find() {
    return db('action')
}

async function findById(id) {
    /*return db('action')
    .where({ id })
    .first();*/
    const action = await db('action')
        .where({ id })
        .first();
    console.log(action)
    const contexts = await findContext(id);
    
    console.log(contexts)
    return { action, contexts }

}

function findContext(id) {
    return db
    .select('context.name as context')
    .from('action_context')
    .leftJoin('context', 'action_context.context_id','context.id')    
    .leftJoin('action', 'action_context.action_id', 'action.id')
    .where({'action_context.action_id' : id})

    /*
        select c.name as context
        from action_context as ac
        left join context as c on ac.context_id = c.id
        left join action as a on ac.action_id = a.id
        where ac.action_id = 3
    */
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



