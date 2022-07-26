import { Project } from '../models/project.js'
import { Day } from '../models/day.js'
import { Profile } from '../models/profile.js'


function index(req, res) {
  Project.find({})
  .populate('days')
  .then(projects => res.json(projects))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const create = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}

function deleteOne(req, res){
  Project.findByIdAndDelete(req.params.id)
  .then(deletedProject => {
    res.json(deletedProject)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}


function show(req, res){
  Project.findById(req.params.id)
  .populate('days')
  .then(project => {project})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function dayIndex(req, res) {
  Day.find({})
  .populate('schedules')
  .then(days => res.json(days))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function dayCreate(req, res){
  Project.findById(req.params.id)
  .populate('days')
  .then(project => {
    project.days.push(req.body)
    project.save()
    .then(()=> res.json(project))

    })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
} 


function createSchedule(req, res){
  Project.findById(req.params.id)
  .populate('days')
  .then(project => {
    console.log(project)
    Day.findById(req.params.id)
    .populate('schedules')
    .then(day => {
      Profile.findById(req.user.profile)
      .then(profile => {
        req.body.author = profile.name
        day.schedules.push(req.body)
        day.save()
        .then(updatedDay => res.json(updatedDay))
    })

  })
})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteSched(req, res){
  Day.findById(req.params.dayId)
  .then(day => {
    day.schedules.remove({_id: req.params.schedId})
    day.save()
    .then(updatedSched => res.json(updatedSched))
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function dayShow(req, res){
  Day.findById(req.params.dayId)
  .then(day => {day})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  index,
  create,
  deleteOne as delete,
  show,
  dayIndex,
  dayCreate,
  createSchedule,
  deleteSched,
  dayShow
}