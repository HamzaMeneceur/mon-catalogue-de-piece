import { Router } from 'express'
import userController from '../controllers/user.js'

const userRouter = Router()

userRouter.post("/signup/new", userController.hashUser)

export default userRouter;