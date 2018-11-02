
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer'), function(table) {
    table.increments()
    table.string('name')
    table.string('imageURL')
    table.float('abv', 1)
    table.string('review')
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beer')
};
