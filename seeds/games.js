/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('game').del()
  await knex('game').insert([
    { id: 1, title: 'overwatch' },
    { id: 2, title: 'Lost Ark' },
    { id: 3, title: 'Project Hospital' },
    { id: 4, title: 'Rim World' },
    { id: 5, title: 'Daisy Chain' },
  ])
}
