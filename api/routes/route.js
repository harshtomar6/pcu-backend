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
      res.send({err: err, success: null})
    else{
      console.log(req.body)
      db.saveJournalEntry(req.body, (err) => {
        res.send({err: null, success: 'Saved Successfully'})
      })
    }
  })
})

//gets daily journal data route
router.get('/journal', (req, res, next) => {
  db.getDailyJournal((err, doc) => {
    if(!err)
      res.send(doc)
    else
      res.send(err)
  })
})

//get journal entry data route
router.get('/journal-entry', (req, res, next) => {
  db.getJournalEntry((err, doc) => {
    if(err)
      res.send(err)
    else
      res.send(doc)
  })
})

//Add new Account data route
router.post('/account', (req, res, next) => {
  db.saveAccount(req.body, (err) => {
    if(err)
    res.send({err: err, success: null})
  else
    res.send({err: null, success: 'Saved Successfully'})
  })
})

//Get Accounts data route
router.get('/account', (req, res, next) => {
  db.getAccount((err, accounts) => {
    if(err)
      res.send(err)
    else
      res.send(accounts)
  })
})

//Get Account by name route
router.post('/account-by-name', (req, res, next) => {
  db.getAccountByName(req.body.name, (err, account) => {
    if(err)
      res.send(err)
    else
      res.send(account)
  })
})

module.exports = router