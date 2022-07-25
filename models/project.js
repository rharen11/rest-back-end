import mongoose from 'mongoose'

const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
  title: String,
  isDone: Boolean,
  days: [{type: Schema.Types.ObjectId, ref: 'Day'}],
  photo: { type: String }
},{
  timestamps: true,
})

const Project = mongoose.model('Project', projectSchema)

export { Project }