import mongoose from 'mongoose'

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
  item: String,
  time: String,
  author: String
}, {
  timestamps: true
})

const daySchema = new mongoose.Schema({
  title: String,
  schedules: [scheduleSchema],
},{
  timestamps: true,
})

const Day = mongoose.model('Day', daySchema)

export { Day }