var mongoose = require('mongoose')
var Schema = mongoose.Schema

var dailyJournalSchema = new Schema({
  date: {type: Date, default: Date.now},
  name: String,
  particular: String,
  debit: Number,
  credit: Number
})

var journalEntrySchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: {type: Date, default: Date.now},
  particular: String,
  description: String,
  debit: Number,
  credit: Number 
}, {_id: false})

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