import { decodeUserFromToken } from '../middleware/auth.js'
import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', tasksCtrl.index)
router.post('/', tasksCtrl.create)
router.post('/:id', tasksCtrl.show)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }