
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_context', tbl => {
    tbl
        .integer('action_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('action')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

    tbl
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('context')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action_context');

};
