const Flight = require('../models/flight')

module.export = {
    new: newFlight,
}

function newFlight(req, res) {
    res.render('flights/new')
}