var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bid1Schema = new mongoose.Schema({
   bids: {type: String},
    user: {type: String}
})
var Bid2Schema = new mongoose.Schema({
  bids: {type: String},
   user: {type: String}
})
var Bid3Schema = new mongoose.Schema({
  bids: {type: String},
   user: {type: String}
})
  
  var Bid1 = mongoose.model('Bid1', Bid1Schema);
  var Bid2 = mongoose.model('Bid2', Bid2Schema);
  var Bid3 = mongoose.model('Bid3', Bid3Schema);
  
  