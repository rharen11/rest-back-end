import { decodeUserFromToken } from '../middleware/auth.js'
import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', projectsCtrl.index)
router.post('/', projectsCtrl.create)
router.delete('/:id', projectsCtrl.delete)
router.get('/:id/days', projectsCtrl.dayIndex)
router.post('/:id/days', projectsCtrl.dayCreate)
router.post('/:id/days/dayId', projectsCtrl.dayShow)
router.post('/:id/days/:dayId/schedules', projectsCtrl.createSchedule)
router.delete('/:id/days/:dayId/schedules/:schedId', projectsCtrl.deleteSched)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }