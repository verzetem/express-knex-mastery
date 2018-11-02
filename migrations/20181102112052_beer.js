exports.up = function(knex, Promise) {
    return knex.schema.createTable('beer', function(table) {
        table.increments();
        table.string('name', 1000);
        table.string('imageUrl', 1000);
        table.float('abv', 1);
        table.string('review', 5000);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('beer');
};
