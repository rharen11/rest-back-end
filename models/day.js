import mongoose from 'mongoose'

const Schema = mongoose.Schema

const scheduleSchema = new Schema({
  item: String,
  time: String
}, {
  timestamps: true
})

const daySchema = new mongoose.Schema({
  title: String,
  schedules: [{scheduleSchema}],
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true,
})

const Day = mongoose.model('Day', daySchema)

export { Day }