let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/graduation',{
  useMongoClient: true
});
let DB = mongoose.connection;

module.exports = DB;