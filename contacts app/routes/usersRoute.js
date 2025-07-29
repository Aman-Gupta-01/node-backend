import { Router } from 'express'
const router = Router()
import { loginUser, registerUser, userDetails } from '../controllers/usersController.js'
import { validateToken } from '../middleware/validateTokenHandler.js'

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/current-user").get(validateToken, userDetails)

export default router;