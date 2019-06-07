
exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', tbl => {
      tbl
      .increments();

      tbl
      .string('name', 255)
      .notNullable()
      .unique();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('context');
};
