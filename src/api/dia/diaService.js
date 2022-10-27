const Dia = require('./dia')

Dia.methods(['get', 'post', 'put', 'delete'])
Dia.updateOptions({new: true, runValidators: true})

module.exports = Dia