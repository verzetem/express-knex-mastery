
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beerPeople'), function(table) {
    table.increments()
    table.string('name')
    table.string('cohort')
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beerPeople')
};
