
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1,
          description: 'test project 1',
          notes: 'task 1',
          completed: 0 }, 

        { project_id: 1,
          description: 'test project 2',
          notes: 'task 2',
          completed: 0 },

        { project_id: 1,
          description: 'test project 3',
          notes: 'task 3',
          completed: 0 },

        { project_id: 1,
          description: 'test project 4',
          notes: 'task 4',
          completed: 0 }
      ]);
    });
};
