const express = require('express')
const router = require.Router
const ticketsCtrl = require('../controllers/tickets')

router.get('/tickets/new', ticketsCtrl.new)

express.exports = router