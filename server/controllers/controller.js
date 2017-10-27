var mongoose = require('mongoose');
var Bid1 = mongoose.model('Bid1');
var Bid2 = mongoose.model('Bid2');
var Bid3 = mongoose.model('Bid3');

module.exports = {
    index1: function(req, res) {
      Bid1.find({}, function (err, bids1){
        res.json({"bids1": bids1});
      })
//     //     Bid2.find({}, function (err, bid2){
//     //         res.json({"bid2": bid2});
//     //   })
//     //   Bid3.find({}, function (err, bid3){
//     //     res.json({"bid3": bid3});
//   })

    
  },index2: function(req, res) {
    Bid2.find({}, function (err, bids2){
      res.json({"bids2": bids2});
    })
},
index3: function(req, res) {
    Bid3.find({}, function (err, bids3){
      res.json({"bids3": bids3});
    })
},

    create: function(req, res) {
      console.log("express create method");
      console.log("lol" + req.body.bids1);
     
      
      var bids1 = new Bid1({
       bids: req.body.bids1,
      });
      
      
      
      bids1.save(function(err) {
        if(err) {
          console.log('something went wrong');
          let errors = [];
          for(var key in err.errors){
            errors.push(err.errors[key].message);
          }
          res.json({message: "Error", error: errors});
        } else { 
          res.json({message: "Success", bids1: bids1});
        }
      })
    },
    create2: function(req, res) {
        console.log("express create method");
        console.log("lol" + req.body.bids2);
       
      var bid2 = new Bid2({
          bids: req.body.bids2,
      });
      bid2.save(function(err) {
        if(err) {
          console.log('something went wrong');
          let errors = [];
          for(var key in err.errors){
            errors.push(err.errors[key].message);
          }
          res.json({message: "Error", error: errors});
        } else { 
          res.json({message: "Success", bid2: bid2});
        }
      })
    },
    create3: function(req, res) {
        console.log("express create method");
        console.log("lol" + req.body);
       
      var bid3 = new Bid3({
          bids:req.body.bids3,
      })
      bid3.save(function(err) {
        if(err) {
          console.log('something went wrong');
          let errors = [];
          for(var key in err.errors){
            errors.push(err.errors[key].message);
          }
          res.json({message: "Error", error: errors});
        } else { 
          res.json({message: "Success", bid3: bid3});
        }
      })
    },
    
}