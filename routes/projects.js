import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', projectsCtrl.index)
router.post('/', projectsCtrl.create)
router.delete('/:id', projectsCtrl.delete)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }