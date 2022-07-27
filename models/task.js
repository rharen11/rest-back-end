import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new mongoose.Schema({
  task: String,
  minutes: String,
  day: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)

export { Task }