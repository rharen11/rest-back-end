import { Task } from '../models/task.js'


function index(req, res) {
  Task.find({})
  .then(tasks => res.json(tasks))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
const create = async (req, res) => {
  console.log(req.body)
  console.log(req.user)
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (err) {
    res.status(500).json(err)
  }
}

function show(req, res){
  Task.findById(req.params.taskId)
  .then(task => {task})
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}


export { 
  index,
  create,
  show,
}