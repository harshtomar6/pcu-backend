var express = require('express')
var router = express.Router()
var db = require('./../models/db')

//Allow cross domain access
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//API homepage route
router.get('/', (req, res, next) => {
  res.send('API is working')
})

//adds save daily journal data route
router.post('/journal', (req, res, next) => {
  db.saveDailyJournal(req.body, (err) => {
    if(err)
      res.send(err)
    else
      res.send('Saved Successfully')
  })
})

//gets daily jiurnal data route
router.get('/journal', (req, res, next) => {
  db.getDailyJournal((err, doc) => {
    if(!err)
      res.send(doc)
    else
      res.send(err)
  })
})


module.exports = router