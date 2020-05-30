
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'project 1',
          description: 'test project 1',
          completed: 0 }
      ]);
    });
};
