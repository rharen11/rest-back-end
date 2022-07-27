import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean,
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)

export { Project }