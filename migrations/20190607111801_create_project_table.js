
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', tbl => {
      tbl
      .increments();

      tbl
      .string('name', 255)
      .notNullable()
      .unique();

      tbl
      .string('description', 1024);
        
      tbl
      .boolean('completed')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
