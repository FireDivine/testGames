/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('TypeOfGame').del()
  await knex('TypeOfGame').insert([
    { id: 1, GameType: 'Shooter' },
    { id: 2, GameType: 'Action' },
    { id: 3, GameType: 'MMO' },
    { id: 4, GameType: 'Adventure' },
  ])
}
