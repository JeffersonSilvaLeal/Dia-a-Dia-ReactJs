const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Dia Routes
    const diaService = require('../api/dia/diaService')
    diaService.register(router, '/dias')
}