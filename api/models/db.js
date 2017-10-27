//Dependencies
let schema = require('./schema.js')
let mongoose = require('mongoose')

//Models
let DailyJournal = mongoose.model('DailyJournal', schema.dailyJournalSchema)
let JournalEntry = mongoose.model('JournalEntry', schema.journalEntrySchema)
let Account = mongoose.model('Account', schema.accountSchema)

//Add Functions
let saveDailyJournal = (data, callback) => {
  var journal = new DailyJournal(data)

  journal.save((err, success) => {
    callback(err, success)
  })
}

//Add Journal Entry
let saveJournalEntry = (data, callback) => {
  var date = data.date;
  var particular = '';

  switch(data.type){
    case 'cash':

    break;
    case 'bank':

    break;
    case 'none':
      
    break;
  }
}

//Add Accounts
let saveAccount = (data, callback) => {
  var account = new Account(data);

  account.save((err, success) => {
    callback(err, success)
  })
}

//Get Functions
let getDailyJournal = (callback) => {
  DailyJournal.find({}, (err, doc) => {
    callback(err, doc)
  })
}

//Get Journal Entry
let getJournalEntry = callback => {
  JournalEntry.find({}, (err, doc) => {
    callback(err, doc)
  })
}

//Get Accounts
let getAccount = callback => {
  Account.find({}, (err, doc) => {
    callback(err, doc)
  })
}

//Get Account by name
let getAccountByName = (name, callback) => {
  Account.findOne({name: name}, (err, acc) => {
    callback(err, acc)
  })
}

//Utility functions
function mapModel(tag){
  
}

//Exporting functions
module.exports = {
  saveDailyJournal,
  saveJournalEntry,
  saveAccount,
  getDailyJournal,
  getJournalEntry,
  getAccount,
  getAccountByName
}