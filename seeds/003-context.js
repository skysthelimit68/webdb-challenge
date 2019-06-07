
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {name: 'Happy'},
        {name: 'High on Caffine'},
        {name: 'A bit crazy'},
        {name: 'MUST HAVE FOOD'},
        {name: 'Living in a city'},
        {name: 'Plenty of sleep'}
      ]);
    });
};
