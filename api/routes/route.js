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
  db.saveDailyJournal(req.body, (err, doc) => {
    if(err)
      res.send({err: err, success: null})
    else{
      req.body.id = doc._id;
      db.saveJournalEntry(req.body, (err, doc) => {
        if(err)
          res.send({err: err, success: null})
        else
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

//Update Daily Journal route
router.post('/update-journal', (req, res, next) => {
  db.updateDailyJournal(req.body, (err, success) => {
    if(err)
      res.send({err: err, success: null});
    else{
      db.updateJournalEntry(req.body, (err, success) => {
        if(err)
          res.send({err: err, success: null})
        else
          res.send({err: null, success: 'Updated Successfully'})
      })
    }
  })
})

//Delete Daily Journal route
router.post('/delete-journal', (req, res, next) => {
  db.deleteDailyJournal(req.body.id, (err, success) => {
    if(err)
      res.send({err: err, success: null})
    else{
      db.deleteJournalEntry(req.body.id, (err, succ) => {
        if(err)
          res.send({err: err, success: null})
        else
          res.send({err: null, success: 'Deleted'})  
      })
      
    }
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