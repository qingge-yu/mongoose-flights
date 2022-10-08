const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render('tickets/new', { id: req.params.id, title: 'Add New Ticket' })
}

function create(req, res) {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body)
    ticket.save(function (err) {
        console.log(err)
        res.redirect(`/flights`)
    })
}

// Flight.findById(req.params.id, function (err, flight) {
//     Ticket.find({ flight: flight._id }, function (err, tickets) {
//         res.render('flights/show', { title: 'Flight Details', flight, tickets })
//     })
//     res.render
// })