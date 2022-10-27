const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/diadia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
