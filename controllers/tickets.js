const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('tickets/new', { id: req.params.id, title: 'Add a new ticket' })
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new')
    })
}

// function addToFlight(req, res) {

// }