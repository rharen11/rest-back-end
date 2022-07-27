import { decodeUserFromToken } from '../middleware/auth.js'
import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', projectsCtrl.index)
router.post('/', projectsCtrl.create)
router.delete('/:id', projectsCtrl.delete)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }