import { Project } from '../models/project.js'


function index(req, res) {
  Project.find({})
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
  .then(project => {project})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { 
  index,
  create,
  deleteOne as delete,
  show
}