const express = require('express')
const res = require('express/lib/response')

const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  //const viewData = { title: 'blah blah blah' }
  db.getAll().then((users) => res.render('home', { users }))

  // res.render('home', viewData)
  //res.send('hello world')
})
router.get('/views/:id', (req, res) => {
  //console.log(req.params.id)
  db.getUserByID(req.params.id).then((user) => res.render('showItem', user))
})

module.exports = router
