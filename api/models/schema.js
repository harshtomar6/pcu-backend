var mongoose = require('mongoose')
var Schema = mongoose.Schema

var dailyJournalSchema = new Schema({
  date: {type: Date, default: Date.now},
  name: String,
  description: String,
  debit: Number,
  credit: Number
})

var journalEntrySchema = new Schema({
  date: {type: Date, default: Date.now},
  name: String,
  description: String,
  debit: Number,
  credit: Number  
})

module.exports = {
  dailyJournalSchema,
  journalEntrySchema
}