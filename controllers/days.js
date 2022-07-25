import { Day } from '../models/day.js'


function index(req, res) {

}

const create = async (req, res) => {
  try {
    const day = await Day.create(req.body)
    res.status(201).json(day)
  } catch (err) {
    res.status(500).json(err)
  }
}



export { 
  index,
  create
}