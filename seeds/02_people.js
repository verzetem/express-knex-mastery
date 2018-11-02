
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "people"; ALTER SEQUENCE people_id_seq RESTART WITH 14;')
  .then(function() {
      return knex('people').insert([
        {
          id: 1,
          name: "Ryan Holly",
          cohort: "g99"
        },
        {
          id: 2,
          name: "Christopher Edgar",
          cohort: "g99"
        },
        {
          id: 3,
          name: "Kyle Czajkowski",
          cohort: "g99"
        },
        {
          id: 4,
          name: "Victor Montoya",
          cohort: "g99"
        },
        {
          id: 5,
          name: "Rob Hill",
          cohort: "g99"
        },
        {
          id: 6,
          name: "Evan Apodaca",
          cohort: "g99"
        },
        {
          id: 7,
          name: "Kerry Abernathy",
          cohort: "g99"
        },
        {
          id: 8,
          name: "Bill Bain",
          cohort: "g99"
        },
        {
          id: 9,
          name: "Daniel Phonelath",
          cohort: "g99"
        },
        {
          id: 10,
          name: "Tyler Adams",
          cohort: "g99"
        },
        {
          id: 11,
          name: "Jonathan Hovland",
          cohort: "g99"
        },
        {
          id: 12,
          name: "Jody Isaguirre",
          cohort: "g99"
        },
        {
          id: 13,
          name: "Son Phan",
          cohort: "g99"
        }
      ]);
  });
};
