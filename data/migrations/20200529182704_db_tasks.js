
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 128).notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed', 128).notNullable().defaultTo(0);
        tbl.integer('project_id', 128).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};
