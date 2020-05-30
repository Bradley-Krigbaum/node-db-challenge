
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id').primary();
            tbl.text('name', 128).unique().notNullable();
            tbl.text('description', 128);
            tbl.boolean('completed', 128).notNullable().defaultTo(0);
        })

        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description', 128).notNullable();
            tbl.text('notes', 128);
            tbl.boolean('completed', 128).notNullable().defaultTo(0);
            tbl.integer('project_id', 128)
                .references('id')
                .inTable('projects')
                .notNullable()
                .onDelete('cascade');
        })

        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 128).notNullable();
            tbl.text('description', 128);
            tbl.integer('project_id', 128)
                .references('id')
                .inTable('projects')
                .notNullable()
                .onDelete('cascade');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
