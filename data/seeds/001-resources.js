
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { project_id: 1,
          name: 'tablet 1',
          description: '2020 ipad pro' },

        { project_id: 1,
          name: 'book 1',
          description: 'great gatsby' },

        { project_id: 1,
          name: 'computer 1',
          description: 'imac' }
      ]);
    });
};
