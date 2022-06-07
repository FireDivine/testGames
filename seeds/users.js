/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Louis Barnes', game_id: 2 },
    { id: 2, name: 'Poppy Jane', game_id: 3 },
    { id: 3, name: 'Cassandra Jones', game_id: 1 },
    {
      id: 4,
      name: 'Fira Divine',
      game_id: 5,
    },
    { id: 5, name: 'Darth Vader 5000', game_id: 4 },
  ])
}
