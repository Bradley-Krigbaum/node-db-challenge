
exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('description', 128);
        tbl.integer('project_id', 128).notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources');
};
