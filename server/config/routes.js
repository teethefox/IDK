var bids = require('../controllers/controller.js');
module.exports = function(app) {
    app.get('/bids', (req, res, next)=>{
        console.log("express get route is working")
        bids.index1(req, res)
      });
      app.get('/bids', (req, res, next)=>{
        console.log("express get route is working")
        bids.index2(req, res)
      });
      app.get('/bids', (req, res, next)=>{
        console.log("express get route is working")
        bids.index3(req, res)
      });
      app.post('/bids', (req, res, next)=>{
        console.log("express post route is working")
        bids.create(req, res)
      });
      app.post('/bids', (req, res, next)=>{
        console.log("express post route is working")
        bids.create2(req, res)
      });
       app.post('/bids', (req, res, next)=>{
        console.log("express post route is working")
        bids.create3(req, res)
      });
      
}
