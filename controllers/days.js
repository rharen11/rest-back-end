import { Day } from '../models/day.js'
import { Profile } from '../models/profile.js'


function index(req, res) {
  Day.find({})
  .populate('schedules')
  .then(days => res.json(days))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const create = async (req, res) => {
  try {
    const day = await Day.create(req.body)
    res.status(201).json(day)
  } catch (err) {
    res.status(500).json(err)
  }
}

function createSchedule(req, res){
  Day.findById(req.params.id)
  // console.log(req.params.id)
  .then(day => {
    Profile.findById(req.user.profile)
    .then(profile => {
      req.body.author = profile.name
      day.schedules.push(req.body)
      day.save()
      .then(updatedDay => res.json(updatedDay))
  })
})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function findScheduleById(req, res){
  Day.findOne({id: req.params.id})
  .then(day => {
    res.json(day)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}



export { 
  index,
  create,
  createSchedule,
  findScheduleById
}