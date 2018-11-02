exports.up = function(knex, Promise) {
    return knex.schema.createTable('people', function(table) {
        table.increments();
        table.string('name', 1000);
        table.string('cohort', 1000);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('people');
};
