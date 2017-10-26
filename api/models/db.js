//Dependencies
let schema = require('./schema.js')
let mongoose = require('mongoose')

//Models
let DailyJournal = mongoose.model('DailyJournal', schema.dailyJournalSchema)

//Add Functions
let saveDailyJournal = (data, callback) => {
  var journal = new DailyJournal(data)

  journal.save((err, success) => {
    callback(err, success)
  })
}

//Get Functions
let getDailyJournal = (callback) => {
  DailyJournal.find({}, (err, doc) => {
    callback(err, doc)
  })
}

//Utility functions
function mapModel(tag){
  
}

//Exporting functions
module.exports = {
  saveDailyJournal,
  getDailyJournal
}