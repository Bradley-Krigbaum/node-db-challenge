
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128).unique().notNullable();
        tbl.text('description', 128);
        tbl.boolean('completed', 128).notNullable().defaultTo(0);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
};
