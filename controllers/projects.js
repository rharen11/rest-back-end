import { Project } from '../models/project.js'


function index(req, res) {

}

const create = async (req, res) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    res.status(500).json(err)
  }
}



export { 
  index,
  create
}