import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, daysCtrl.index)
router.post('/', checkAuth, daysCtrl.create)
router.post('/:id/schedules', checkAuth, daysCtrl.createSchedule)
router.get('/:id/schedules', checkAuth, daysCtrl.findScheduleById)


export { router }