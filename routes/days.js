import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', daysCtrl.index)
router.post('/', daysCtrl.create)
router.post('/:id/schedules', daysCtrl.createSchedule)
router.delete('/:id/schedules/:schedId', daysCtrl.deleteSched)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }