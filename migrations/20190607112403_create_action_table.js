
exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', tbl => {
        tbl
        .increments();

        tbl
        .string('description', 255)
        .notNullable();

        tbl
        .text('note');

        tbl
        .boolean('completed')
        .notNullable();

        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('project');
  };
  