const config = require('./knexfile').development
const dbcon = require('knex')(config)

function getAll(db = dbcon) {
  return db('users').select()
}

function getUserByID(id, db = dbcon) {
  return db('users')
    .join('game', 'users.game_id', 'game.id')
    .select('users.name as name', 'game.title as title')
    .where('users.id', id)
    .first()
}

module.exports = { getAll, getUserByID }
