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
  var description = data.description;
  var debit = data.debit != 0 ? data.debit: data.credit;
  var credit = data.credit !=0 ? data.credit: data.debit;

  switch(data.particular){
    case 'Goods Sold':
      switch(data.type){
        case 'cash':
          particular = 'Cash Account DR to Sales Account'
          break;
        case 'bank':
          particular = 'Bank Account DR to Sales Account'
          break;
        case 'other':
          particular = data.name+' A/C DR to Sales Account'
          break;
      }
      break;
    
    case 'Goods Purchased':
      switch(data.type){
        case 'cash':
          particular = 'Purchase Account DR to Cash Account';
          break;
        case 'bank':
          particular = 'Purchase Account DR to Bank Account'; 
          break;
        case 'other':
          particular = 'Purchase Account DR to '+data.name+' A/C';
          break;
      }
      break;

    case 'Cash Recieved':
      particular = 'Cash Account DR to '+data.name+' A/C'
      break;
    
    case 'Cheque Recieved':
      particular = 'Bank Account DR to '+data.name+' A/C'
      break;
    
    case 'Cash Paid':
      particular = data.name+' A/C DR to Cash Account'
      break;

    case 'Cheque Paid':
      particular = data.name+' A/C DR to Bank Account'
      break;
    
    case 'Salary Paid':
      particular = 'Salary Account DR to Bank Account'
      break;
    
    case 'Cash Drawn':
      particular = 'Drawing Account DR to Bank Account'
      break;
  }

  var entry = new JournalEntry({date: date, particular: particular, description: description, debit: debit, credit: credit})
  entry.save((err, doc) => {
    callback(err, doc);
  })
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