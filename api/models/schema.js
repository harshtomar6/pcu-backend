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
  particular: String,
  debit: Number,
  credit: Number  
})

var accountDetailSchema = new Schema({
  date: {type: Date, default: Date.now},
  particular: String,
  debit: Number,
  credit: Number
})

var accountSchema = new Schema({
  name: {type: String, unique: true},
  tag: String,
  particulars: accountDetailSchema
})

module.exports = {
  dailyJournalSchema,
  journalEntrySchema,
  accountSchema
}