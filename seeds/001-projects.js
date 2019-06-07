
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Giaboon', description: 'A complete package for the hospitality industry', completed: false},
        {name: 'PaTeStu Connect', description: 'Playground that connects Students, Teachers, and Parents', completed: false},
        {name: 'Asset Manager', description: 'An asset management system that works across industries', completed: false}
      ]);
    });
};
