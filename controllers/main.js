const express = require('express')
const Guest = require('../models/guest')

const isAuthenticated = () => {
  if (req.session.currentUser) {
    return next()
  }
  return res.redirect('/sessions/new')
}

const main = express.Router()

main.get('/', (req, res) => {
  res.render('app/index.ejs')
})

main.get('/new', (req, res) => {
  res.render('app/new.ejs')
})

main.get('/:id/edit', (req, res) => {
  res.render('app/edit.ejs')
})

main.get('/:id', (req, res) => {
  res.render('app/show.ejs')
})

module.exports = main
