import { Router } from 'express'
const router = Router()
import { 
    deleteContact,
    getContects, 
    getOneContact, 
    postContect, 
    putContact 
} from '../controllers/contactController.js'
import {validateToken} from '../middleware/validateTokenHandler.js'

router.use(validateToken)

router.route('/')
    .get(getContects)
    .post(postContect)

router.route('/:id')
    .get(getOneContact)
    .put(putContact)
    .delete(deleteContact)

export default router;